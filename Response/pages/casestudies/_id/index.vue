<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :all-chapters="['overview', 'team']"
      :page-name="paragraphs.name"
      :breadcrumbs="breadcrumbs"
    />
    <!--Include a showcase-->
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
      default-image-path="/img/all_casestudies.jpg"
    />
    <div id="overview" class="anchor"></div>
    <!--Include paragraphs of text-->
    <Paragraph
      v-for="paragraph in paragraphs.casestudiescontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.content"
      :image="paragraph.image"
    />
    <div id="team" class="anchor"></div>
    <!--Include the team members' slideshow-->
    <SlideShowEmployee :content="paragraphs.employees" :title="'Team'" />
  </div>
</template>

<script>
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'
import SlideShowEmployee from '~/components/SlideShowEmployee'

export default {
  components: {
    ShowCase,
    Paragraph,
    SlideShowEmployee,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/casestudies/${route.params.id}`
    )
    const paragraphs = data
    return {
      paragraphs,
    }
  },
  data() {
    return {
      breadcrumbs: [],
    }
  },
  head() {
    return {
      title: `Response | ${this.paragraphs.name}`,
    }
  },
  created() {
    this.breadcrumbs = [
      {
        name: 'All Case Studies',
        link: '/casestudies#top',
      },
    ]
  },
}
</script>

<style scoped></style>
