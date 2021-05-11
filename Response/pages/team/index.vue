<template>
  <div>
    <ShowCase
      :title="'Our Team'"
      :text="''"
      :image="{ path: '/images/employee/allteam.png' }"
    />
    <Paragraph
      :title="'Meet our employees'"
      :text="'They work hard'"
      :image="null"
    />
    <SlideShowEmployee :content="employeesAI" :title="'AI Team'" />
    <SlideShowEmployee
      :content="employeesCyber"
      :title="'Cyber Security Team'"
    />
    <SlideShowEmployee
      :content="employeesCloud"
      :title="'Cloud Services Team'"
    />
    <SlideShowEmployee
      :content="employeesDigital"
      :title="'Digital Services Team'"
    />
    <Contacts />
    <SocialBlock />
  </div>
</template>

<script>
import SlideShowEmployee from '~/components/SlideShowEmployee'
import ShowCase from '~/components/ShowCase'
import SocialBlock from '~/components/SocialBlock'
import Contacts from '~/components/Contacts'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    SlideShowEmployee,
    ShowCase,
    Paragraph,
    SocialBlock,
    Contacts,
  },
  async asyncData({ $axios, route }) {
    const areas4 = await $axios.get(`${process.env.BASE_URL}/api/areas/4`)
    const employeesAI = areas4.data.employees

    const areas2 = await $axios.get(`${process.env.BASE_URL}/api/areas/2`)
    const employeesCloud = areas2.data.employees

    const areas3 = await $axios.get(`${process.env.BASE_URL}/api/areas/3`)
    const employeesDigital = areas3.data.employees

    const areas1 = await $axios.get(`${process.env.BASE_URL}/api/areas/1`)
    const employeesCyber = areas1.data.employees

    return {
      employeesAI,
      employeesCloud,
      employeesDigital,
      employeesCyber,
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
