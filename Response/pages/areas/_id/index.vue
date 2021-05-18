<template>
  <div>
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
    />
    <Paragraph
      v-for="paragraph in paragraphs.areacontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <SlideShowEmployee :content="paragraphs.employees" :title="'Team'" />
    <!-- <SlideShow :content="paragraphs.employees" :title="'Team'" /> -->
    <SlideShow :content="paragraphs.services" :title="'Services'" />
    <!-- v-for per slideshow -->
  </div>
</template>

<script>
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'
import SlideShow from '~/components/SlideShow'
import SlideShowEmployee from '~/components/SlideShowEmployee'

export default {
  components: {
    ShowCase,
    SlideShow,
    SlideShowEmployee,
    Paragraph,
  },

  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/areas/${route.params.id}`
    )
    const paragraphs = data
    return {
      paragraphs,
    }
  },
}
</script>

<style scoped></style>
