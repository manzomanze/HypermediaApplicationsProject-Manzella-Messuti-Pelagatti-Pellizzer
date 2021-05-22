<template>
  <div>
    <LowBar :something="['overview', 'services']" />
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.description"
      :image="paragraphs.image"
    />
    <div id="overview" class="anchor"></div>
    <Paragraph
      v-for="paragraph in paragraphs.businesssectorcontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.content"
      :image="paragraph.image"
    />
    <div id="services" class="anchor"></div>
    <SlideShow :content="paragraphs.services" :title="'Services'" />
    <!-- v-for per slideshow -->
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

  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/businesssectors/${route.params.id}`
    )
    const paragraphs = data
    return {
      paragraphs,
    }
  },
}
</script>

<style scoped></style>
