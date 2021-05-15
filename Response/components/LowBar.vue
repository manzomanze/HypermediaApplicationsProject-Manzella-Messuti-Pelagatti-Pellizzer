<template>
  <div ref="doc" class="lowBar">
    <ul id="chapters" ref="chapters" class="navbar-invisible">
      <li>
        <a href="#">Overview</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Team</a>
      </li>
      <li>
        <a href="#">Case Studies</a>
      </li>
    </ul>
    <div class="capBurger" @click="navSlide">
      <p>Cap.&nbsp;</p>
      <p id="arrow" ref="arrow" class="text-theme-color">
        <i class="fas fa-chevron-left"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LowBar',
  data() {
    return {
      arrow: Object,
      capBurger: Object,
      chapters: Object,
      capLinks: Object,
    }
  },
  mounted() {
    this.arrow = this.$refs.arrow
    this.capBurger = this.$refs.doc.querySelector('.capBurger')
    this.chapters = this.$refs.chapters
    this.capLinks = this.$refs.doc.querySelectorAll('#chapters > li')
  },
  methods: {
    navSlide() {
      // Show or Hide Navbar links
      this.chapters.classList.toggle('navbar-invisible')
      // Burger Animation
      this.arrow.classList.toggle('down-arrow')

      // Link fade animation
      this.capLinks.forEach((link, index) => {
        if (link.style.animation) {
          setTimeout(() => {
            link.style.animation = ''
          }, 300)
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`
        }
      })
    },
  },
}
</script>

<style scoped>
.lowBar {
  opacity: 0.95;
  padding: 0 10px;
  background-color: #bbb;
  position: fixed;
  left: 0;
  top: 6vh;
  z-index: 9;
  height: 3vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lowBar * {
  transition-duration: 300ms;
}

.lowBar ul {
  display: flex;
  flex-direction: row;
}

#chapters li {
  padding: 0 10px;
}

.lowBar a {
  color: #333;
}

.lowBar a:hover {
  letter-spacing: 1px;
  padding: 0px 1px;
  color: #fff;
}

.lowBar .capBurger {
  position: absolute;
  right: 0px;
  display: none;
  width: 80px;
}

#arrow {
  font-weight: 600;
  font-size: 1rem;
  color: var(--main_color);
  letter-spacing: 1px;
}

@media (max-width: 750px) {
  #chapters {
    position: absolute;
    top: 3vh;
    left: 0px;
    font-size: 3rem;
    height: 91vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #ccc;
    transition: 500ms;
  }

  #chapters li {
    opacity: 0;
    padding: 20px;
  }

  .lowBar .capBurger {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-invisible {
    transform: translateX(100%);
  }

  .down-arrow {
    transform: rotate(-90deg);
  }
}
</style>

<style>
/* Animations */
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
