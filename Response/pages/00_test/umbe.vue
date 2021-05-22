<template>
  <div>
    <LowBar :something="['overview']" />
    <ShowCase />
    <Paragraph
      v-for="paragraph in paragraphs"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <ListElements :content="slideContents" :title="'Areas'" />
    <SlideShow :content="businesssectorsContents" :title="'Business Sectors'" />
    <SlideShowEmployee :content="employeesContents" :title="'Team'" />
    <FormSection />
    <Contacts />
    <SocialBlock />
  </div>
</template>

<script>
import LowBar from '~/components/LowBar'
import FormSection from '~/components/FormSection'
import SlideShow from '~/components/SlideShow'
import ListElements from '~/components/ListElements'
import SlideShowEmployee from '~/components/SlideShowEmployee'
import ShowCase from '~/components/ShowCase'
import SocialBlock from '~/components/SocialBlock'
import Contacts from '~/components/Contacts'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    LowBar,
    FormSection,
    SlideShow,
    ListElements,
    SlideShowEmployee,
    ShowCase,
    Paragraph,
    SocialBlock,
    Contacts,
  },
  async asyncData({ $axios, route }) {
    const areas = await $axios.get(`${process.env.BASE_URL}/api/areas/`)
    const slideContents = areas.data

    const employees = await $axios.get(`${process.env.BASE_URL}/api/employees/`)
    const employeesContents = employees.data

    const businesssectors = await $axios.get(
      `${process.env.BASE_URL}/api/businesssectors/`
    )
    const businesssectorsContents = businesssectors.data
    return {
      slideContents,
      employeesContents,
      businesssectorsContents,
    }
  },
  data() {
    return {
      slideTitle: 'Areas',
      paragraphs: [],
    }
  },
  head() {
    return {
      title: 'Response | About Us',
    }
  },
  created() {
    /* fetch from the server */
    this.paragraphs = [
      {
        title: 'CONTACTS',
        text:
          'Bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga',
        image: null,
      },
      {
        title: 'MAPS',
        text: 'Look at this!!! Oh wow!!!',
        image: null,
      },
    ]
  },
}
</script>

<style scoped></style>
