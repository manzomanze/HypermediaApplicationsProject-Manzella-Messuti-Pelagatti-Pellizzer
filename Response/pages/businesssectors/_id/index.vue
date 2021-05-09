<template>
  <div>
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.description"
      :image="paragraphs.image"
    />
    <Paragraph
      v-for="paragraph in paragraphs.businesssectorcontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.content"
      :image="paragraph.image"
    />
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
