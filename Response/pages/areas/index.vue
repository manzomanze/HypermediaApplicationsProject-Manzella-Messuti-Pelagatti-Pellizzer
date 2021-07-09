<template>
  <div>
    <LowBar :something="['allareas']" :page-name="'All Areas'" />
    <ShowCase
      title="All Areas"
      text=""
      :image="{ path: '/img/all_areas.jpg' }"
    />
    <div id="allareas" class="anchor"></div>
    <ListElements
      :is-large="true"
      :content="slideContents"
      section="areas"
      default-image-path="/img/all_areas.jpg"
    />
  </div>
</template>

<script>
import LowBar from '~/components/LowBar'
import ListElements from '~/components/ListElements'
import ShowCase from '~/components/ShowCase'

export default {
  components: {
    LowBar,
    ListElements,
    ShowCase,
  },
  async asyncData({ $axios, route }) {
    const areas = await $axios.get(`${process.env.BASE_URL}/api/areas/`)
    const slideContents = areas.data

    const employees = await $axios.get(`${process.env.BASE_URL}/api/employees/`)
    const employeesContents = employees.data

    const services = await $axios.get(`${process.env.BASE_URL}/api/services/`)
    const servicessContents = services.data

    const businesssectors = await $axios.get(
      `${process.env.BASE_URL}/api/businesssectors/`
    )
    const businesssectorsContents = businesssectors.data
    return {
      slideContents,
      employeesContents,
      businesssectorsContents,
      servicessContents,
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
