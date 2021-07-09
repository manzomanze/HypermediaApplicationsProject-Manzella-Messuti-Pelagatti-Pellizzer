<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :something="['overview', 'team', 'casestudies', 'services']"
      :page-name="paragraphs.name"
      :breadcrumbs="breadcrumbs"
    />
    <!--Include a showcase-->
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
    />
    <div id="overview" class="anchor"></div>
    <!--Include paragraphs of text-->
    <Paragraph
      v-for="paragraph in paragraphs.areacontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <div id="services" class="anchor"></div>
    <!--Include the services' slideshow-->
    <SlideShow :content="paragraphs.services" :title="'Services'" />
    <div id="team" class="anchor"></div>
    <!--Include the team members' slideshow-->
    <SlideShowEmployee :content="paragraphs.employees" :title="'Team'" />
    <div id="casestudies" class="anchor"></div>
    <!--Include the case studies' slideshow-->
    <SlideShow :content="caseStudies" :title="'Case Studies'" />
  </div>
</template>

<script>
import LowBar from '~/components/LowBar'
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'
import SlideShow from '~/components/SlideShow'
import SlideShowEmployee from '~/components/SlideShowEmployee'

export default {
  components: {
    LowBar,
    ShowCase,
    SlideShow,
    SlideShowEmployee,
    Paragraph,
  },
  // Fetch from the database the paragraphs and the case studies
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/areas/${route.params.id}`
    )
    const caseStudiesData = await $axios.get(
      `${process.env.BASE_URL}/api/casestudiesfromarea/${route.params.id}`
    )
    const caseStudies = caseStudiesData.data
    const paragraphs = data
    return {
      paragraphs,
      caseStudies,
    }
  },
  data() {
    return {
      breadcrumbs: [],
    }
  },
  created() {
    this.breadcrumbs = [
      {
        name: 'All Services',
        link: '/services#top',
      },
    ]
  },
}
</script>

<style scoped></style>
