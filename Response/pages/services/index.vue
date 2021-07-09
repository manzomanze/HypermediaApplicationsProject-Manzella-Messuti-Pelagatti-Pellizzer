<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar :something="['allservices']" :page-name="'All Services'" />
    <!--Include a showcase-->
    <ShowCase
      title="All Services"
      text="With over 270,000 partnerships with a broad spectrum of technology vendors, Response has both the resources and expertise to react quickly to client needs—a key asset in a digital era when deployment needs to be measured in weeks rather than months."
      :image="{ path: '/img/all_services.jpg' }"
    />
    <div id="allservices" class="anchor"></div>
    <!--Include the list of all the services-->
    <ListElements
      :content="servicessContents"
      section="services"
      default-image-path="/img/all_services.jpg"
    />
    <br />
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
    const services = await $axios.get(`${process.env.BASE_URL}/api/services/`)
    const servicessContents = services.data
    return {
      servicessContents,
    }
  },
  head() {
    return {
      title: 'Response | All Services',
    }
  },
}
</script>

<style scoped></style>
