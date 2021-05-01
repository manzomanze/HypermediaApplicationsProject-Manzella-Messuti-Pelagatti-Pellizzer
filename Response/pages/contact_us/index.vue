<template>
  <div>
    <ShowCase />
    <Paragraph
      :key="paragraph.id"
      v-for="paragraph in pragraphs"
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
  data() {
    return {
      paragraphs: [],
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
  components: {
    ShowCase,
    Paragraph,
  },

  head() {
    return {
      title: 'Response | Contact Us',
    }
  },
}
</script>

<style scoped></style>
