<template>
  <div>
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
    />
    <Paragraph
      v-for="paragraph in paragraphs.casestudiescontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.content"
      :image="paragraph.image"
    />
    <SlideShowEmployee :content="paragraphs.employees" :title="'Team'" />
    <!-- v-for per slideshow -->
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
}
</script>

<style scoped></style>
