<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :all-chapters="[
        'biography',
        'fieldofexpertise',
        'services',
        'casestudies',
      ]"
      :page-name="paragraphs.name + ' ' + paragraphs.surname"
      :breadcrumbs="breadcrumbs"
    />
    <!--Include minimal personal information-->
    <HalfShowCase
      :name="paragraphs.name"
      :surname="paragraphs.surname"
      :location="paragraphs.location"
      :role="paragraphs.role"
      :image="paragraphs.main_image"
      :areaid="paragraphs.areaId"
    />
    <!--Include multiple parapgrapghs of text-->
    <div id="biography" class="anchor"></div>
    <Paragraph
      v-if="paragraphs.what_i_do"
      :key="'what_i_do'"
      :title="'What I Do'"
      :text="paragraphs.what_i_do"
      :image="null"
    />
    <Paragraph
      v-if="paragraphs.daily_life"
      :key="'daily_life'"
      :title="'Daily life'"
      :text="paragraphs.daily_life"
      :image="null"
    />
    <Paragraph
      v-if="paragraphs.expert_advice"
      :key="'expert_advice'"
      :title="'Expert Advice'"
      :text="paragraphs.expert_advice"
      :image="null"
    />

    <!--Include a link to the field of expertise-->
    <div id="fieldofexpertise" class="anchor"></div>
    <SlideShowSingle
      :content="paragraphs.area"
      :title="'Field of Expertise'"
      :section="'Areas'"
    />

    <div id="services" class="anchor"></div>
    <!--Include the services' slideshow-->
    <SlideShow :content="paragraphs.services" :title="'Services'" />

    <!--Include the case studies' slideshow-->
    <div id="casestudies" class="anchor"></div>
    <SlideShow
      :content="paragraphs.casestudies"
      :title="'Case Studies'"
      default-image-path="/img/all_casestudies.jpg"
    />
  </div>
</template>

<script>
import HalfShowCase from '~/components/HalfShowCase'
import Paragraph from '~/components/Paragraph'
import SlideShow from '~/components/SlideShow'
import SlideShowSingle from '~/components/SlideShowSingle'

export default {
  components: {
    HalfShowCase,
    Paragraph,
    SlideShow,
    SlideShowSingle,
  },
  async asyncData({ $axios, route }) {
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/employees/${route.params.id}`
    )
    const paragraphs = data
    return {
      paragraphs,
    }
  },
  data() {
    return {
      breadcrumbs: [],
    }
  },
  head() {
    return {
      title: 'Response | Team Member',
    }
  },
  created() {
    this.breadcrumbs = [
      {
        name: 'All Team',
        link: '/team#top',
      },
      {
        name: this.paragraphs.area.name,
        link: '/areas/' + this.paragraphs.area.id + '#top',
      },
    ]
  },
}
</script>

<style scoped></style>
