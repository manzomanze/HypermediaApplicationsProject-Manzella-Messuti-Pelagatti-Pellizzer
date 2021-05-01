<template>
  <div>
    <div class="normalTitle">
      <h2>{{ title }}</h2>
    </div>
    <div class="paragraph">
      <p>
        {{ text }}
      </p>
    </div>
    <div v-if="isImage" class="img-paragraph">
      <div class="img-container">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    title: { type: String, default: () => 'okay' },
    text: { type: String, default: () => 'ciaociao' },
    image: { type: String, default: () => '' },
  },
  computed: {
    isImage() {
      return !(this.image === '')
    },
  },
}
</script>

<style scoped>
/* Normal Title */
.normalTitle {
  display: flex;
  justify-content: left;
  position: relative;
  max-width: 1000px;
  margin: auto;
}

.normalTitle h2 {
  text-align: left;
  padding: 0px 10px;
  color: #333;
  font-size: 2rem;
  margin: 20px;
}

/* Paragraph */
.paragraph {
  display: flex;
  justify-content: left;
  position: relative;
  max-width: 1000px;
  margin: auto;
}

.paragraph p {
  text-align: justify;
  padding: 0px 10px;
  color: #333;
  font-size: 1.2rem;
  margin: 20px;
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
  width: 70%;
}
</style>
