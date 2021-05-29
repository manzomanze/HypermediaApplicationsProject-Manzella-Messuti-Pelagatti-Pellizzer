<template>
  <div>
    <LowBar :something="['overview', 'team', 'services']" />
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
    />
    <div id="overview" class="anchor"></div>
    <Paragraph
      v-for="paragraph in paragraphs.areacontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <div id="services" class="anchor"></div>
    <SlideShow :content="paragraphs.services" :title="'Services'" />
    <div id="team" class="anchor"></div>
    <SlideShowEmployee :content="paragraphs.employees" :title="'Team'" />
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
