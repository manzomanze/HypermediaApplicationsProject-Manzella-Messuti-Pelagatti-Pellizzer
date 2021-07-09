<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :something="['csai', 'cscloud', 'csdigital', 'cscybersec']"
      :page-name="'All Case Studies'"
    />
    <!--Include a showcase-->
    <ShowCase
      :title="'Case Studies'"
      :text="'Relevant settings where the various Response teams have applied their knowledge and expertise'"
      :image="{ path: '/img/all_casestudies.jpg' }"
    />
    <div id="csai" class="anchor"></div>
    <!--Include AI case studies' slideshow-->
    <SlideShow
      :content="casestudies4"
      section="casestudies"
      title="Artificial Intelligence Case Studies"
    />

    <div id="cscloud" class="anchor"></div>
    <!--Include Cloud case studies' slideshow-->
    <SlideShow
      :content="casestudies2"
      section="casestudies"
      title="Cloud Case Studies"
    />

    <div id="csdigital" class="anchor"></div>
    <!--Include Digital case studies' slideshow-->
    <SlideShow
      :content="casestudies3"
      section="casestudies"
      title="Digital Services Case Studies"
    />

    <div id="cscybersec" class="anchor"></div>
    <!--Include Cybersecurity case studies' slideshow-->
    <SlideShow
      :content="casestudies1"
      section="casestudies"
      title="CyberSecurity Case Studies"
    />
    <br />
  </div>
</template>

<script>
import LowBar from '~/components/LowBar'
import SlideShow from '~/components/SlideShow'
import ShowCase from '~/components/ShowCase'

export default {
  components: {
    LowBar,
    SlideShow,
    ShowCase,
  },
  // Fetch from the database the case studies belonging to each area
  async asyncData({ $axios, route }) {
    const areas4 = await $axios.get(
      `${process.env.BASE_URL}/api/casestudiesfromarea/4`
    )
    const casestudies4 = areas4.data

    const areas2 = await $axios.get(
      `${process.env.BASE_URL}/api/casestudiesfromarea/2`
    )
    const casestudies2 = areas2.data

    const areas3 = await $axios.get(
      `${process.env.BASE_URL}/api/casestudiesfromarea/3`
    )
    const casestudies3 = areas3.data

    const areas1 = await $axios.get(
      `${process.env.BASE_URL}/api/casestudiesfromarea/1`
    )
    const casestudies1 = areas1.data

    return {
      casestudies4,
      casestudies2,
      casestudies3,
      casestudies1,
    }
  },
  head() {
    return {
      title: 'Response | All Case Studies',
    }
  },
}
</script>

<style scoped></style>
