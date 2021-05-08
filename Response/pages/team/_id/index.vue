<template>
  <div>
    <ShowCase
      :title="paragraphs.name"
      :text="paragraphs.overview"
      :image="paragraphs.image"
    />
    <Paragraph
      v-for="paragraph in paragraphs.areacontents"
      :key="paragraph.id"
      :title="paragraph.title"
      :text="paragraph.text"
      :image="paragraph.image"
    />
    <!-- v-for per slideshow -->
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
      `${process.env.BASE_URL}/api/team/${route.params.id}`
    )
    const paragraphs = data
    return {
      paragraphs,
    }
  },

  //   data() {
  //     return {
  //       paragraphs: [],
  //     }
  //   },
  //   head() {
  //     return {
  //       title: 'Response | Artificial Intelligence Services',
  //     }
  //   },
  //   created() {
  //     /* fetch from the server */
  //     this.paragraphs = [
  //       {
  //         title: 'Leverage Data & AI’s transformative power with Perform AI',
  //         text:
  //           'Artificial Intelligence (AI) has crossed the threshold of pilots, and entered the wider market. 53% of organizations have managed to scale AI projects in production – but only 13% overall have rolled out multiple AI applications across numerous teams, as per the findings of the Response Research Institute report – The AI Powered Enterprise: Unlocking the potential of AI at scale.',
  //         image: '',
  //       },
  //       {
  //         title: '',
  //         text:
  //           'Perform AI, Response’s comprehensive portfolio of AI & Analytics services, provides your organization with the ability to leverage the full transformative power of Data & AI at scale. By activating data and insights at the heart of your business, in your everyday decisions and actions, you will augment your organization’s intelligence, and amplify business outcomes you expect from Data & AI.',
  //         image: '',
  //       },
  //       {
  //         title: 'Data & AI for trusted business outcomes',
  //         text:
  //           'Leading organizations are today already leveraging the transformative power of Data and AI to design and launch new products, services, business models – even creating new markets. They are also finding efficiencies, optimizing processes and reducing costs, becoming more agile so they can grasp new opportunities, and developing greater resilience to sudden crises.',
  //         image: '',
  //       },
  //       {
  //         title: '',
  //         text:
  //           'Our teams have a proven track record of delivering tangible business outcomes globally and at scale, across industries and sectors:',
  //         image: '../../assets/AI1.jpg',
  //       },
  //     ]
  //   },
}
</script>

<style scoped></style>
