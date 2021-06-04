<template>
  <div>
    <LowBar
      :something="[
        'aiteam',
        'cybersecurity',
        'cloudservices',
        'digitalservices',
      ]"
      :page-name="'All Team'"
    />
    <ShowCase
      :title="'Our Team'"
      :text="'Meet our employees'"
      :image="{ path: '/images/employee/AllTeam.png' }"
    />
    <div id="aiteam" class="anchor"></div>
    <SlideShowEmployee :content="employeesAI" :title="'AI Team'" />

    <div id="cybersecurity" class="anchor"></div>
    <SlideShowEmployee
      :content="employeesCyber"
      :title="'Cyber Security Team'"
    />

    <div id="cloudservices" class="anchor"></div>
    <SlideShowEmployee
      :content="employeesCloud"
      :title="'Cloud Services Team'"
    />

    <div id="digitalservices" class="anchor"></div>
    <SlideShowEmployee
      :content="employeesDigital"
      :title="'Digital Services Team'"
    />
    <br />
  </div>
</template>

<script>
import LowBar from '~/components/LowBar'
import SlideShowEmployee from '~/components/SlideShowEmployee'
import ShowCase from '~/components/ShowCase'

export default {
  components: {
    LowBar,
    SlideShowEmployee,
    ShowCase,
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
