<template>
  <div>
    <ShowCase />
    <Paragraph
      v-for="paragraph in paragraphs"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <SlideShow :content="slideContents" :title="slideTitle" />
  </div>
</template>

<script>
import SlideShow from '~/components/SlideShow'
import ShowCase from '~/components/ShowCase'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    SlideShow,
    ShowCase,
    Paragraph,
  },
  data() {
    return {
      paragraphs: [],
      slideContents: [],
      slideTitle: '',
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
          'se vulete manda nu sfaccim e messag, in coppa a whatsapp, 349 2386666',
        image: '',
      },
      {
        title: 'MAPS',
        text: 'Look at this!!! Oh wow!!!',
        image: '',
      },
    ]
    this.slideContents = [
      {
        title: 'Elem 1',
        image: '/img/AI_01.jpg',
      },
      {
        title: 'Elem 2',
        image: '/img/AI_02.jpg',
      },
      {
        title: 'Elem 3',
        image: '/img/AI_03.jpg',
      },
    ]
    this.slideTitle = 'Super SUS'
  },
}
</script>

<style scoped></style>
