<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar :something="['allindustries']" :page-name="'All Industries'" />
    <!--Include a showcase-->
    <ShowCase
      title="All Industries"
      text="With over 270,000 partnerships with a broad spectrum of technology vendors, Response has both the resources and expertise to react quickly to client needs—a key asset in a digital era when deployment needs to be measured in weeks rather than months."
      :image="{ path: '/img/all_industries.png' }"
    />
    <div id="allindustries" class="anchor"></div>
    <!--Include the list of all the business sectors-->
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
  // Fetch from the database all the business sectors
  async asyncData({ $axios, route }) {
    const businesssectors = await $axios.get(
      `${process.env.BASE_URL}/api/businesssectors/`
    )
    const businesssectorsContents = businesssectors.data
    return {
      businesssectorsContents,
    }
  },
  head() {
    return {
      title: 'Response | About Us',
    }
  },
}
</script>

<style scoped></style>
