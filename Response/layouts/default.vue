<template>
  <div>
    <div id="top" class="anchor"></div>
    <TopBar />
    <Nuxt />
    <Chat :chat-list="list" />
    <SocialBlock />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter'
import TopBar from '~/components/TopBar'
import Chat from '~/components/Chat'
import MMCCMixin from '~/mixins/mmcc-mixin'

export default {
  components: {
    TopBar,
    TheFooter,
    Chat,
  },
  mixins: [MMCCMixin],
}
</script>

<style>
/* Import Open Sans */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

/* Import Fonts */
@font-face {
  /* font-family: Lobster; */
  font-family: 'Lobster';
  font-display: swap;
  src: url(/fonts/Lobster-Regular.ttf);
}

/* Montserrat */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/Montserrat-SemiBold.ttf);
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/Montserrat-Regular.ttf);
}

/* Variables */
:root {
  --main_color: #00a2ff;
  --light_color: #82e6ff;
}

html {
  scroll-behavior: smooth;
}

/* Reset */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /*
  -webkit-user-select: none; /* Safari * /
  -moz-user-select: none; /* Firefox * /
  -ms-user-select: none; /* IE10+/Edge * /
  user-select: none; /* Standard * /
  */
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
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 45%,
      rgba(255, 255, 255, 0.8) 65%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('/img/sfondo.jpg') center center;
}

body::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}

/* Common text styles */
.text-primary {
  font-weight: 700;
  font-size: 2.2rem;
  color: var(--main_color);
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
  color: var(--main_color);
}

.anchor {
  position: relative;
  top: -90px;
}

/* Text Styles */
.text-bold-primary {
  font-weight: 600;
  color: var(--main_color);
}
.text-bold-primary-italic {
  font-weight: 600;
  color: var(--main_color);
  font-style: italic;
}
.text-bold {
  font-weight: 700;
}
.text-italic {
  font-style: italic;
}
</style>
