<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :all-chapters="['overview', 'area', 'team']"
      :page-name="paragraphs.name"
      :breadcrumbs="breadcrumbs"
    />
    <!--Include a showcase-->
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
      default-image-path="/img/all_services.jpg"
    />
    <div id="overview" class="anchor"></div>
    <!--Include paragraphs of text-->
    <Paragraph
      v-for="paragraph in paragraphs.servicescontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.content"
      :image="paragraph.image"
    />
    <div id="area" class="anchor"></div>
    <!--Include the link to the domain area-->
    <SlideShowSingle
      :content="paragraphs.area"
      :title="'Service Area'"
      :section="'Areas'"
    />
    <div id="team" class="anchor"></div>
    <!--Include the team members' slideshow-->
    <SlideShow
      :is-person="true"
      :content="paragraphs.employees"
      :title="'Team'"
    />
  </div>
</template>

<script>
import ShowCase from '~/components/ShowCase'
import SlideShow from '~/components/SlideShow'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    ShowCase,
    SlideShow,
    Paragraph,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/services/${route.params.id}`
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
        name: 'All Services',
        link: '/services#top',
      },
      {
        name: this.paragraphs.area.name,
        link: '/areas/' + this.paragraphs.area.id + '#top',
      },
    ]
  },
}
</script>

<style scoped></style>
