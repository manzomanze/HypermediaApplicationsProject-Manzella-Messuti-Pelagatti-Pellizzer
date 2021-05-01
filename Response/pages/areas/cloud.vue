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
      title: 'Response | Cloud Services',
    }
  },
  created() {
    /* fetch from the server */
    this.paragraphs = [
      {
        title: '',
        text:
          'In the digital era, cloud is the foundation for agility and growth, allowing you to harness the power of breakthrough technologies like IoT and artificial intelligence, provide ground-breaking experiences, and deliver at the pace of innovation. Freed from the need to focus on basic infrastructure and fueled by next-generation capabilities and tools, you can imagine and act on new ways of doing business, ahead of the competition – with more funds to invest in transformation initiatives.',
        image: '',
      },
      {
        title: 'Transformation across technology, people, and processes',
        text:
          'From migration to application modernization, cloud-native transformation to API-led integration, and automation to DevOps and PODS, Response can help you maximize the value of a cloud-first way of working. We’ll help you transform not just your technology, but your people and processes, too, so you can realize maximum value from the cloud.',
        image: '',
      },
      {
        title: 'Your cloud experts',
        text:
          ' When you work with Response, you get the benefit of working with the experts in cloud and application technologies. We bring one of the largest teams of professionally certified digital and cloud experts and are consistently recognized for our capabilities and vision. We draw on the depth of our experience and the extent of our expertise to take an outcomes-focused approach to IT initiatives, mapping business goals to IT objectives.',
        image: '',
      },
      {
        title: '',
        text: '',
        image: '',
      },
      {
        title: '',
        text: '',
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
