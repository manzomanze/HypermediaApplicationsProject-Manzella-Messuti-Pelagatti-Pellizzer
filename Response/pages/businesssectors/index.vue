<template>
  <div>
    <LowBar :something="['allindustries']" />
    <ShowCase
      title="All Industries"
      text="With over 270,000 partnerships with a broad spectrum of technology vendors, Response has both the resources and expertise to react quickly to client needs—a key asset in a digital era when deployment needs to be measured in weeks rather than months."
      :image="{ path: '/img/all_industries.png' }"
    />
    <div id="allindustries" class="anchor"></div>
    <ListElements
      :is-large="true"
      :content="businesssectorsContents"
      section="businesssectors"
      default-image-path="/img/all_industries.png"
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
