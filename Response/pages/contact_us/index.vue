<template>
  <div>
    <!--Include the bar with breadcrumb and anchors-->
    <LowBar
      :something="['tellus', 'map', 'ourcontacts']"
      :page-name="'Contact Us'"
    />
    <!--Include a showcase-->
    <ShowCase
      title="Contact Us!"
      :image="{
        path:
          'https://d11wkw82a69pyn.cloudfront.net/glue-reply/siteassets/images/glue_contact_canvas.jpg',
      }"
      text="Thank you for your interest in Response. Whatever your inquiry, we will direct you to the right contact information."
    />
    <div id="tellus" class="anchor"></div>
    <!--Include the form-->
    <FormSection />
    <div id="map" class="anchor"></div>
    <!--Include the map-->
    <Paragraph
      :key="paragraphs[0].id"
      :title="paragraphs[0].title"
      :text="paragraphs[0].text"
      :image="paragraphs[0].image"
    />
    <div id="ourcontacts" class="anchor"></div>
    <!--Include Social Links-->
    <Contacts />
  </div>
</template>

<script>
import FormSection from '~/components/FormSection'
import ShowCase from '~/components/ShowCase'
import Contacts from '~/components/Contacts'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    FormSection,
    ShowCase,
    Paragraph,
    Contacts,
  },
  data() {
    return {
      paragraphs: [],
      showcaseImage: Object,
    }
  },
  head() {
    return {
      title: 'Response | Contact Us',
    }
  },
  created() {
    this.paragraphs = [
      {
        text:
          'Our operational headquarters is in Milan, near the “Garibaldi” metro station.',
        title: 'Come and see us',
        image: {
          path: '/img/ResponseHQ_map.png',
          alt_description: 'Headquarters Map',
        },
      },
    ]
  },
}
</script>

<style scoped></style>
