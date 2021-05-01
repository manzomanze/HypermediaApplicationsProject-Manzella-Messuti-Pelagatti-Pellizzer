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

  /* async asyncData({axios???}) {
      const config = {
        headers: {
        Accept: "application/json"
        }
      }
      try {
        const res = await axios.get("", config);
        const paragraphs = res.data.results;
      } catch (err) {
        console.log(err);
        }
    } */

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
  created() {
    /* fetch from the server */
    this.paragraphs = [
      {
        title: 'CONTACTS',
        text: 'mail: xxxx@xxxx.com NON SO ANDARE A CAPO phone:+39 xxxxxxxxxx',
        image: '',
      },
      {
        title: 'MAPS',
        text: 'We are here:',
        image: '',
      },
    ]
  },
}
</script>

<style scoped></style>
