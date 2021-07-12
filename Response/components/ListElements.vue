<template>
  <div ref="slideShowContainer" class="slideShowContainer">
    <!-- Show all elements coming from database in a list -->
    <div class="container">
      <NuxtLink
        v-for="element in content"
        :key="element.id"
        :class="isLargeBox()"
        :style="imagePath(element.image)"
        :to="`/${finalLink()}/${element.id}#top`"
      >
        <h3 class="title">{{ element.name }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    title: { type: String, default: () => 'Title Here' },
    section: { type: String, default: () => '' },
    content: {
      type: Array,
      default: null,
    },
    defaultImagePath: { type: String, default: () => '/img/all_services.jpg' },
    isLarge: { type: Boolean, default: () => false },
  },
  data() {
    return {
      clickable: true,
      maxWidth: Object,
    }
  },
  methods: {
    isLargeBox() {
      return this.isLarge
        ? 'slide slideShowBox largeSlideBox'
        : 'slide slideShowBox'
    },
    imagePath(image) {
      if (image == null) {
        return `background: url('${this.defaultImagePath}') center center/cover`
      } else {
        return `background: url('${image.path}') center center/cover`
      }
    },
    finalLink() {
      // if there are spaces in the title we delete them.
      // All uppercases are transformed to lowercases
      if (this.section === '') {
        return this.title.replace(/\s/g, '').toLowerCase()
      } else {
        return this.section.replace(/\s/g, '').toLowerCase()
      }
    },
  },
}
</script>

<style scoped>
/* Normal Title */
.normalTitle {
  display: flex;
  justify-content: center;
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

.slideShowContainer {
  /* overflow: hidden; */
  max-width: 1000px;
  margin: 30px auto;
  position: relative;
  width: 100%;
  min-height: 250px;
}

.slideShowContainer .sectionTitle {
  width: 100%;
  text-align: center;
  padding: 0px 30px 30px;
}

.slideShowContainer .container {
  position: relative;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1000px;
  min-height: 210px;
  /* overflow: hidden; */
}

.slideShowContainer .container a {
  margin: 20px;
}

.slideShowBox {
  opacity: 0.8;
  transition-duration: 250ms;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* position: absolute; */
  width: 200px;
  height: 210px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  border: #888 1px solid;
  border-bottom: #333 3px solid;
}

.slideShowBox::before {
  border-radius: 10px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.26);
}

.slideShowBox:hover {
  opacity: 1;
  color: var(--main_color);
  background-color: rgba(255, 255, 255, 0.11);
  border: var(--main_color) 1px solid;
  border-bottom: var(--main_color) 4px solid;
}

.slideShowBox h3 {
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  margin: 5%;
}

@media (max-width: 750px) {
  .slideShowContainer {
    width: 100%;
  }
  .slideShowContainer .container {
    width: 100%;
  }

  .slideShowBox {
    height: 100px;
    width: 80%;
  }
}
</style>

<style>
.slide.slideShowBox.largeSlideBox {
  width: 100%;
  height: 16vh;
}

@media (max-width: 750px) {
  .slide.slideShowBox.largeSlideBox {
    height: 100px;
    width: 80%;
  }
}
</style>
