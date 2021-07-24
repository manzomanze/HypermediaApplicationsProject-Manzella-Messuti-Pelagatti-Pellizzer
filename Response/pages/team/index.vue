<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :all-chapters="[
        'aiteam',
        'cybersecurity',
        'cloudservices',
        'digitalservices',
      ]"
      :page-name="'All Team'"
    />
    <!--Include a showcase-->
    <ShowCase
      :title="'Our Team'"
      :text="'Meet our employees'"
      :image="{ path: '/images/employee/AllTeam.png' }"
    />
    <div id="aiteam" class="anchor"></div>
    <!--Include AI team members' slideshow-->
    <SlideShow :is-person="true" :content="employeesAI" :title="'AI Team'" />

    <div id="cybersecurity" class="anchor"></div>
    <!--Include Cybersecurity team members' slideshow-->
    <SlideShow
      :is-person="true"
      :content="employeesCyber"
      :title="'Cyber Security Team'"
    />

    <div id="cloudservices" class="anchor"></div>
    <!--Include Cloud team members' slideshow-->
    <SlideShow
      :is-person="true"
      :content="employeesCloud"
      :title="'Cloud Services Team'"
    />

    <div id="digitalservices" class="anchor"></div>
    <!--Include Digital team members' slideshow-->
    <SlideShow
      :is-person="true"
      :content="employeesDigital"
      :title="'Digital Services Team'"
    />
    <br />
  </div>
</template>

<script>
import LowBar from '~/components/LowBar'
import SlideShow from '~/components/SlideShow'
import ShowCase from '~/components/ShowCase'

export default {
  components: {
    LowBar,
    SlideShow,
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
  head() {
    return {
      title: 'Response | Team',
    }
  },
}
</script>

<style scoped></style>
