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
    <!-- slideshows -->
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
      title: 'Response | Digital Services',
    }
  },
  created() {
    /* fetch from the server */
    this.paragraphs = [
      {
        title: 'Addressing Your Challenges',
        text:
          'Digital needs to be pervasive – tinkering at the edges is not enough. Digital needs to be in every part of the organization to make its effect truly felt. Digital demands continuous disruption in the way you think, the way you work, and the way you engage with customers and within your value network.',
        image: '',
      },
      {
        title: 'Applied Innovation Exchange Network',
        text:
          'We stand behind innovation as the right way to make today’s business relevant for tomorrow. We recognize that we’re operating in an era where innovation cycles are measured in days and weeks, not months and years, and work with our clients to embed innovation at the center of their business transformation.',
        image: '',
      },
      {
        title: '',
        text: '',
        image: '',
      },
    ]
  },
}
</script>

<style scoped></style>
