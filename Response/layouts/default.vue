<template>
  <div>
    <TheHeader />
    <SocialButtons />
    <Nuxt />
    <Chat :chat-list="list" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import SocialButtons from '~/components/SocialButtons'
import Chat from '~/components/Chat'
import MMCCMixin from '~/mixins/mmcc-mixin'

export default {
  components: {
    TheHeader,
    SocialButtons,
    TheFooter,
    Chat,
  },
  mixins: [MMCCMixin],
}
</script>

<style>
/* Import Fonts */
@font-face {
  font-family: Lobster;
  src: url(/fonts/Lobster-Regular.ttf);
}

/* light */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts/OpenSans-Light.ttf) format('ttf');
}
/* Regular */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/OpenSans-Regular.ttf) format('ttf');
}
/* Bold */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/OpenSans-Bold.ttf) format('ttf');
}
/* Extra Bold */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/OpenSans-ExtraBold.ttf) format('ttf');
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
  top: -9vh;
}

/* Text Styles */
.text-bold-primary {
  font-weight: 600;
  color: var(--main_color);
  font-style: italic;
}
.text-bold {
  font-weight: 600;
}
.text-italic {
  font-style: italic;
}
</style>
