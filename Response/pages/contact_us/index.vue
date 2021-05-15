<template>
  <div>
    <ShowCase
      title="Contact Us!"
      :image="{
        path:
          'https://d11wkw82a69pyn.cloudfront.net/glue-reply/siteassets/images/glue_contact_canvas.jpg',
      }"
      text="Thank you for your interest in Response. Whatever your inquiry, we will direct you to the right contact information."
    />
    <FormSection />
    <Paragraph
      :key="paragraphs[0].id"
      :title="paragraphs[0].title"
      :text="paragraphs[0].text"
      :image="paragraphs[0].image"
    />
    <Contacts />
    <SocialBlock />
  </div>
</template>

<script>
import FormSection from '~/components/FormSection'
import ShowCase from '~/components/ShowCase'
import SocialBlock from '~/components/SocialBlock'
import Contacts from '~/components/Contacts'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    FormSection,
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
      showcaseImage: Object,
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
        text:
          'Our operational headquarters is in Milan, near the “Garibaldi” metro station.',
        title: 'Come and see us',
        image: { path: '/img/ResponseHQ_map.png' },
      },
    ]
  },
}
</script>

<style scoped></style>
