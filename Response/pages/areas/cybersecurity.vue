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
      title: 'Response | CyberSecurity Services',
    }
  },
  created() {
    /* fetch from the server */
    this.paragraphs = [
      {
        title:
          'Transform your cybersecurity, strengthen it and become proactive, effective and resilient.',
        text:
          'Cybersecurity is a core business requirement, providing a secure foundation to transform your enterprise and support your business.',
        image: '',
      },
      {
        title: '',
        text:
          'Through Response’s portfolio of cybersecurity services, your team gains access to proven cybersecurity practitioners enabled by expertise and driven by experience. Our services, solutions and delivery models, including our global network of Security Operations Centers, provide increased visibility and rapid detection of threats in your enterprise. Using our end-to-end services, we can accelerate your cybersecurity growth through every phase of your cyber transformation — whatever your team’s level of cybersecurity maturity. We offer cybersecurity customized to individual business contexts and act as a partner in your cyber-transformation journey.',
        image: '',
      },
    ]
  },
}
</script>

<style scoped></style>
