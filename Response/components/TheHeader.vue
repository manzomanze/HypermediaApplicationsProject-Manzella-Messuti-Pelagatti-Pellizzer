<template>
  <header>
    <TopBar />
    <!-- <LowBar /> -->
  </header>
</template>

<script>
import TopBar from './TopBar'
// import LowBar from './LowBar'

export default {
  name: 'TheHeader',

  components: {
    TopBar,
    // LowBar,
  },
}
</script>

<style scoped></style>
