<template>
  <div class="showcase">
    <div class="container" :style="`${imagePath()}; height: ${height}px;`">
      <div class="divider"></div>
      <h2
        v-if="isMain"
        class="main-title"
        :style="`font-family: 'Lobster'; font-size: 7rem`"
      >
        {{ title }}
      </h2>
      <h2
        v-else
        :style="`font-family: 'Montserrat', sans-serif; font-size: 3rem`"
      >
        {{ title }}
      </h2>
      <h3 v-if="text" class="text-grey">{{ text }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowCase',
  props: {
    title: { type: String, default: () => '' },
    text: { type: String, default: () => '' },
    image: { type: Object, default: () => null },
    isMain: { type: Boolean, default: () => false },
    // Default image of the components (if something has no image)
    defaultImagePath: { type: String, default: () => '/img/AI_01.jpg' },
    height: { type: String, default: () => '450' },
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

<style>
/* Showcase */
.showcase {
  position: relative;
  overflow: hidden;
}

.showcase .divider {
  height: 90px;
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
  min-height: 400px;
  /* background: url('/img/AI_01.jpg') center center/cover no-repeat; */
}

.showcase .container h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  text-shadow: 2px 2px var(--main_color);
  color: #fff;
  padding-bottom: 15px;
  margin: 0px 45px;
}

.showcase .container h3 {
  margin: 0px 45px;
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

@media (max-width: 550px) {
  .showcase .container h2 {
    font-size: 2.2rem !important;
  }

  .showcase .container h2.main-title {
    font-size: 20vw !important;
  }

  .showcase .container h3 {
    display: none;
  }
}
</style>
