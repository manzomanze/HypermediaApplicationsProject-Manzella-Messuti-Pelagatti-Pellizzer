<template>
  <div>
    <ShowCase />
    <p>Contact us here:</p>
    <Contacts />
    <p>Our social network:</p>
    <SocialBlock />
  </div>
</template>

<script>
import ShowCase from '../../components/ShowCase'
import Contacts from '../../components/Contacts'
import SocialBlock from '../../components/SocialBlock'

export default {
  components: {
    ShowCase,
    Contacts,
    SocialBlock,
  },

  head() {
    return {
      title: 'Response | Contact Us',
    }
  },
}
</script>

<style scoped></style>
