<template>
  <div>
    <ShowCase />
    <Paragraph
      v-for="paragraph in paragraphs"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <SlideShow :content="slideContents" :title="'Areas'" />
    <SlideShowEmployee :content="employeesContents" :title="'Team'" />
    <FormSection />
  </div>
</template>

<script>
import FormSection from '~/components/FormSection'
import SlideShow from '~/components/SlideShow'
import SlideShowEmployee from '~/components/SlideShowEmployee'
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    FormSection,
    SlideShow,
    SlideShowEmployee,
    ShowCase,
    Paragraph,
  },
  async asyncData({ $axios, route }) {
    const areas = await $axios.get(`${process.env.BASE_URL}/api/areas/`)
    const slideContents = areas.data

    const employees = await $axios.get(`${process.env.BASE_URL}/api/employees/`)
    const employeesContents = employees.data
    return {
      slideContents,
      employeesContents,
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
    // this.slideContents = [
    //   {
    //     title: 'Elem 1',
    //     image: '/img/AI_01.jpg',
    //   },
    //   {
    //     title: 'Elem 2',
    //     image: '/img/AI_02.jpg',
    //   },
    //   {
    //     title: 'Elem 3',
    //     image: '/img/AI_03.jpg',
    //   },
    // ]
    // this.slideTitle = 'Super SUS'
  },
}
</script>

<style scoped></style>
