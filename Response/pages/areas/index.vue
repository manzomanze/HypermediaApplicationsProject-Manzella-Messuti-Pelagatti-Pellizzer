<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar :something="['allareas']" :page-name="'All Areas'" />
    <!--Include a showcase-->
    <ShowCase
      title="All Areas"
      text=""
      :image="{ path: '/img/all_areas.jpg' }"
    />
    <div id="allareas" class="anchor"></div>
    <!--Include the list of all the areas-->
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
  // Fetch from the database all the areas
  async asyncData({ $axios, route }) {
    const areas = await $axios.get(`${process.env.BASE_URL}/api/areas/`)
    const slideContents = areas.data
    return {
      slideContents,
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
}
</script>

<style scoped></style>
