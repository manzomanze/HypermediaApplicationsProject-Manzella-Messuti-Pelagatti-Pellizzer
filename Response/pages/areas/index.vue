<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar :all-chapters="['allareas']" :page-name="'All Areas'" />
    <!--Include a showcase-->
    <ShowCase
      title="All Areas"
      text="With our global network of over 100 innovation hubs around the world, we apply industry expertise, diverse skill sets and next-generation technology to each business challenge. In particular we can help you by applying our skills in our fields of expertise to your business."
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
      title: 'Response | All Areas',
    }
  },
}
</script>

<style scoped></style>
