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
  </div>
</template>

<script>
import ShowCase from '../../components/ShowCase'
import Paragraph from '../../components/Paragraph'

export default {
  components: {
    ShowCase,
    Paragraph,
  },
  data() {
    return {
      paragraphs: [],
    }
  },
  head() {
    return {
      title: 'Response | Contact Us',
    }
  },
  /* async */ created() {
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
  },
}
</script>

<style scoped></style>
