<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
/* Reset */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

body {
  overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #333;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

/* Hide Scrollbar */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

body::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}

/* Common text styles */
.text-primary {
  font-weight: 700;
  font-size: 2.2rem;
  color: #ec7404;
  letter-spacing: 2px;
}

.text-light {
  color: #fff;
}

.text-grey {
  color: #ccc;
}

.text-dark {
  color: #444;
}

.text-theme-color {
  color: #ec7404;
}
</style>
