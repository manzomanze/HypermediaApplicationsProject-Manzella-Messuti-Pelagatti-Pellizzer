<template>
  <div class="showcase">
    <div class="container" :style="imagePath()">
      <h2>{{ title }}</h2>
      <h3 v-if="text" class="text-grey">{{ text }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowCase',
  props: {
    title: { type: String, default: () => 'okay' },
    text: { type: String, default: () => 'ciaociao' },
    image: { type: Object, default: () => null },
    defaultImagePath: { type: String, default: () => '/img/AI_01.jpg' },
  },
  methods: {
    imagePath() {
      if (this.image == null) {
        return `background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 97%, rgba(255,255,255,1) 100%), url('${this.defaultImagePath}') center center/cover no-repeat;`
      } else {
        return `background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 97%, rgba(255,255,255,1) 100%), url('${this.image.path}') center center/cover no-repeat;`
      }
    },
  },
}
</script>

<style scoped>
/* Showcase */
.showcase {
  position: relative;
}

.showcase .container * {
  z-index: 1;
}

.showcase .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 102vh;
  /* background: url('/img/AI_01.jpg') center center/cover no-repeat; */
}

.showcase .container h2 {
  font-size: 3rem;
  text-shadow: 2px 2px var(--main_color);
  color: #fff;
  padding-bottom: 15px;
}

.showcase .container h3 {
  margin: 0px 20px;
  max-width: 1000px;
  text-shadow: 2px 2px #444;
}

/* .showcase .container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
} */
</style>
