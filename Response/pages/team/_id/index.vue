<template>
  <div>
    <HalfShowCase
      :name="paragraphs.name"
      :surname="paragraphs.surname"
      :location="paragraphs.location"
      :role="paragraphs.role"
      :image="paragraphs.main_image"
      :areaid="paragraphs.areaId"
    />
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
    <SlideShowSingle
      :content="paragraphs.area"
      :title="'Field of Expertise'"
      :section="'Areas'"
    />
    <SlideShow :content="paragraphs.services" :title="'Services'" />
    <SlideShow :content="paragraphs.casestudies" :title="'Case Studies'" />
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
}
</script>

<style scoped></style>
