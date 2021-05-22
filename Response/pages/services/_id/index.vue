<template>
  <div>
    <LowBar :something="['overview', 'businesssectors']" />
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
    <div id="businesssectors" class="anchor"></div>
    <SlideShow
      :content="paragraphs.businesssectors"
      :title="'Business Sectors'"
    />
  </div>
</template>

<script>
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    ShowCase,
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
