export default {
  data() {},
  mounted() {
    // First Build the slideshow
    this.buildSlideShow()
    this.resizeListener()
  },
  methods: {
    showButtons() {
      this.$refs.slideShowContainer.querySelector('.next').style.display = ''
      this.$refs.slideShowContainer.querySelector('.prev').style.display = ''
    },
    hideButtons() {
      this.$refs.slideShowContainer.querySelector('.next').style.display =
        'none'
      this.$refs.slideShowContainer.querySelector('.prev').style.display =
        'none'
    },
    resizeListener() {
      window.addEventListener('resize', () => {
        this.buildSlideShow()
      })
    },
    buildSlideShow() {
      const width = window.innerWidth
      let visibles = 5

      const slides = this.$refs.slideShowContainer.querySelectorAll('.slide')
      const container = this.$refs.slideShowContainer.querySelector(
        '.container'
      )
      if (width < 1330) {
        visibles = 4
      }
      if (width < 1070) {
        visibles = 3
      }
      if (width < 810) {
        visibles = 2
      }
      if (width < 576) {
        visibles = 1
      }
      const maxWidth = slides.length > visibles ? visibles : slides.length
      container.style.width = `${maxWidth * (200 + 50)}px`

      if (slides.length <= visibles) {
        this.hideButtons()
      } else {
        this.showButtons()
      }

      // Place each slide from the beginning of the container
      for (let k = 0; k < slides.length; k++) {
        slides[k].style.left = `${25 + (200 + 50) * k}px`
      }
    },
  },
}
