<template>
  <div>
    <!-- Show only what received from the page -->
    <div v-if="title" class="normalTitle">
      <h2 v-html="title"></h2>
    </div>
    <div v-if="text" class="paragraph">
      <p v-html="text"></p>
    </div>
    <div v-if="image" class="img-paragraph">
      <div class="img-container">
        <img :src="image.path" :alt="image.alt_description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    title: { type: String, default: () => '' },
    text: { type: String, default: () => '' },
    image: { type: Object, default: () => null },
  },
}
</script>

<style>
/* Normal Title */
.normalTitle {
  display: flex;
  justify-content: left;
  position: relative;
  max-width: 1300px;
  padding-top: 2%;
  margin: auto;
}

.normalTitle h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-align: left;
  padding: 0px 5%;
  color: #333;
  font-size: 2.7rem;
  margin: 20px;
}

/* Paragraph */
.paragraph {
  display: flex;
  justify-content: left;
  position: relative;
  max-width: 1300px;
  margin: auto;
}

.paragraph p {
  text-align: left;
  padding: 0px 5%;
  color: #333;
  font-size: 1.4rem;
  margin: 20px;
  white-space: pre-line;
}

/* Image Paragraph */
.img-paragraph {
  padding: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1000px;
  margin: auto;
}

.img-paragraph img {
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5%;
}

.img-paragraph .img-container {
  width: 90%;
}
@media (max-width: 1050px) {
  .normalTitle h2 {
    font-size: 2.4rem !important;
  }
  @media (min-width: 750px) {
    .normalTitle,
    .paragraph,
    .img-paragraph {
      padding: 0 30px;
    }
  }
}
</style>
