<template>
  <div>
    <LowBar :something="['overview', 'area', 'team']" />
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
      default-image-path="/img/all_services.jpg"
    />
    <div id="overview" class="anchor"></div>
    <Paragraph
      v-for="paragraph in paragraphs.servicescontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.content"
      :image="paragraph.image"
    />
    <div id="area" class="anchor"></div>
    <SlideShowSingle
      :content="paragraphs.area"
      :title="'Service Area'"
      :section="'Areas'"
    />
    <div id="team" class="anchor"></div>
    <SlideShowEmployee :content="paragraphs.employees" :title="'Team'" />
  </div>
</template>

<script>
import ShowCase from '~/components/ShowCase'
import SlideShowEmployee from '~/components/SlideShowEmployee'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    ShowCase,
    SlideShowEmployee,
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
}
</script>

<style scoped></style>
