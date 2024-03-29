<template>
  <div ref="slideShowContainer" class="slideShowContainer">
    <div class="normalTitle">
      <h2>{{ title }}</h2>
    </div>
    <!-- Modified versione of slideshow which receives data reguarding employees -->
    <!-- The style of the tiles is the main difference -->
    <div class="container">
      <NuxtLink
        v-for="element in content"
        :key="element.id"
        class="slide slideShowBox"
        :style="imagePath(element.image)"
        :to="returnFinalLink(element.id)"
      >
        <h3 v-if="isPerson" class="title is-person">
          {{ element.name }} {{ element.surname }}
        </h3>
        <h3 v-else class="title not-person">{{ element.name }}</h3>
      </NuxtLink>
    </div>
    <div class="next" @click="prev">
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="prev" @click="next">
      <i class="fas fa-chevron-left"></i>
    </div>
  </div>
</template>

<script>
import SlidersMixin from '~/mixins/sliders-mixin'
export default {
  name: 'SlideShow',
  mixins: [SlidersMixin],
  props: {
    title: { type: String, default: () => 'Title Here' },
    section: { type: String, default: () => '' },
    content: {
      type: Array,
      default: null,
    },
    defaultImagePath: { type: String, default: () => '/img/all_services.jpg' },
    isPerson: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clickable: true,
      maxWidth: Object,
      x: Object,
    }
  },
  methods: {
    returnFinalLink(elem) {
      if (this.isPerson) {
        return `/team/${elem}#top`
      } else {
        return `/${this.finalLink()}/${elem}#top`
      }
    },
    imagePath(image) {
      if (image == null) {
        return `background: url('${this.defaultImagePath}') center center/cover`
      } else {
        return `background: url('${image.path}') center center/cover`
      }
    },
    extractNumber(text) {
      let numb = text.match(/\d/g)
      numb = numb.join('')
      return numb * 1
    },
    next() {
      // Simple Rate Limiter
      if (!this.clickable) {
        return
      }
      this.clickable = false
      setTimeout(() => {
        this.clickable = true
      }, 300)

      // Get from the button the slideShowContainer
      const slides = this.$refs.slideShowContainer.querySelectorAll('.slide')

      const maxWidth = 25 + slides.length * 250

      for (let i = 0; i < slides.length; i++) {
        const leftOffset = this.extractNumber(slides[i].style.left)

        if (leftOffset + 250 === maxWidth) {
          slides[i].style.left = `${leftOffset + 250}px`
          slides[i].style.visibility = 'hidden'
          setTimeout(function () {
            slides[i].style.transitionDuration = '0ms'
          }, 100)
          setTimeout(function () {
            slides[i].style.left = '-250px'
          }, 100)
          setTimeout(function () {
            slides[i].style.visibility = 'visible'
            slides[i].style.transitionDuration = '250ms'
            slides[i].style.left = '25px'
          }, 150)
        } else {
          slides[i].style.left = `${leftOffset + 250}px`
        }
      }
    },
    prev() {
      // Simple Rate Limiter
      if (!this.clickable) {
        return
      }
      this.clickable = false
      setTimeout(() => {
        this.clickable = true
      }, 300)

      // Get from the button slideshowcontainer
      const slides = this.$refs.slideShowContainer.querySelectorAll('.slide')

      const minWidth = 25
      const maxWidth = 25 + slides.length * 250

      for (let i = 0; i < slides.length; i++) {
        let leftOffset = this.extractNumber(slides[i].style.left)

        if (leftOffset - 250 < minWidth) {
          slides[i].style.left = `${leftOffset - 250}px`
          slides[i].style.visibility = 'hidden'
          setTimeout(function () {
            slides[i].style.transitionDuration = '0ms'
          }, 100)
          setTimeout(function () {
            slides[i].style.left = `${maxWidth + 250}px`
            leftOffset = maxWidth
          }, 100)
          setTimeout(function () {
            slides[i].style.visibility = 'visible'
            slides[i].style.transitionDuration = '250ms'
            slides[i].style.left = `${leftOffset - 250}px`
          }, 150)
        } else {
          slides[i].style.left = `${leftOffset - 250}px`
        }
      }
    },
    finalLink() {
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
  text-align: center;
  padding: 0px 10px;
  color: #333;
  font-size: 2.7rem;
  margin: 20px;
}

@media (max-width: 420px) {
  .normalTitle h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

.slideShowContainer {
  overflow: hidden;
  max-width: 1500px;
  /* margin: 30px auto; */
  margin: 120px auto;
  position: relative;
  width: 100%;
  min-height: 300px;
}

.prev,
.next {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  transition-duration: 250ms;
  text-align: center;
  position: absolute;
  font-size: 30px;
  color: #fff;
  background-color: rgba(122, 122, 122, 0.137);
  width: 40px;
  height: 40px;
  font-weight: 700;
  /* top: 60%; */
  bottom: 80px;
  border-radius: 5px;
  border: #fff 1px solid;
  border-bottom: #fff 3px solid;
  transform: translateY(-50%);

  cursor: pointer;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.next {
  right: 1.2em;
}

.prev {
  left: 1.2em;
}

.prev:hover,
.next:hover {
  color: var(--main_color);
  border: var(--main_color) 1px solid;
  border-bottom: var(--main_color) 3px solid;
  background-color: rgba(122, 122, 122, 0.096);
}

.slideShowContainer .sectionTitle {
  width: 100%;
  text-align: center;
  padding: 0px 30px 30px;
}

.slideShowContainer .container .slide NuxtLink {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  z-index: 2;
}

.slideShowContainer .container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  min-height: 210px;
  overflow: hidden;
}

.slideShowBox {
  opacity: 0.8;
  transition-duration: 250ms;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
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
}

.is-person {
  position: absolute;
  bottom: 10px;
}

.not-person {
  margin: 5%;
}

@media (max-width: 750px) {
  .slideShowContainer {
    width: 100%;
  }
}
</style>
