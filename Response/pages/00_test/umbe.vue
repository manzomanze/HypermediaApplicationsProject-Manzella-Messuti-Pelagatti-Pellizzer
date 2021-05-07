<template>
  <div>
    <HalfShowCase />
    <ShowCase />
    <Paragraph
      v-for="paragraph in paragraphs"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <SlideShow :content="slideContents" :title="slideTitle" />
    <FormSection />
  </div>
</template>

<script>
import HalfShowCase from '~/components/HalfShowCase'
import FormSection from '~/components/FormSection'
import SlideShow from '~/components/SlideShow'
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    HalfShowCase,
    FormSection,
    SlideShow,
    ShowCase,
    Paragraph,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas/`)
    const slideContents = data
    return {
      slideContents,
    }
  },
  data() {
    return {
      slideTitle: 'Areas',
      paragraphs: [],
    }
  },
  head() {
    return {
      title: 'Response | About Us',
    }
  },
  created() {
    /* fetch from the server */
    this.paragraphs = [
      {
        title: 'CONTACTS',
        text:
          'Bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga bellaraga',
        image: null,
      },
      {
        title: 'MAPS',
        text: 'Look at this!!! Oh wow!!!',
        image: null,
      },
    ]
    // this.slideContents = [
    //   {
    //     title: 'Elem 1',
    //     image: '/img/AI_01.jpg',
    //   },
    //   {
    //     title: 'Elem 2',
    //     image: '/img/AI_02.jpg',
    //   },
    //   {
    //     title: 'Elem 3',
    //     image: '/img/AI_03.jpg',
    //   },
    // ]
    // this.slideTitle = 'Super SUS'
  },
}
</script>

<style scoped></style>
