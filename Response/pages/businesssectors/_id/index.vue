<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :something="['overview', 'services']"
      :breadcrumbs="breadcrumbs"
      :page-name="paragraphs.name"
    />
    <!--Include a showcase-->
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.description"
      :image="paragraphs.image"
    />
    <div id="overview" class="anchor"></div>
    <!--Include paragraphs of text-->
    <Paragraph
      v-for="paragraph in paragraphs.businesssectorcontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.content"
      :image="paragraph.image"
    />
    <div id="services" class="anchor"></div>
    <!--Include the services' slideshow-->
    <SlideShow :content="paragraphs.services" :title="'Services'" />
  </div>
</template>

<script>
import ShowCase from '~/components/ShowCase'
import SlideShow from '~/components/SlideShow'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    ShowCase,
    Paragraph,
    SlideShow,
  },
  // Fetch from the database the paragraphs
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/businesssectors/${route.params.id}`
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
  created() {
    this.breadcrumbs = [
      {
        name: 'All Business Sectors',
        link: '/businesssectors#top',
      },
    ]
  },
}
</script>

<style scoped></style>
