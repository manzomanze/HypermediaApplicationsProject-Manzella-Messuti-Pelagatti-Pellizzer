<template>
  <div v-if="!(allChapters.length === 0)" ref="doc" class="lowBar">
    <!-- Shows all Breadcrumbs coming from the page -->
    <div class="bread">
      <ul>
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
          <p>
            <span class="text-bold">/</span>&nbsp;<NuxtLink
              :to="breadcrumb.link"
              >{{ breadcrumb.name }}&nbsp;</NuxtLink
            >
          </p>
        </li>
        <li>
          <p>
            <span class="text-bold">/</span>&nbsp;<a href="#top"
              ><span class="text-bold-primary">{{ pageName }}</span></a
            >
          </p>
        </li>
      </ul>
    </div>
    <!-- List of all possible chapters -->
    <!-- Only those needed by the page are shown -->
    <ul id="chapters" ref="chapters" class="navbar-invisible" @click="hideNav">
      <li v-if="allChapters.includes('overview')">
        <a href="#overview">Overview</a>
      </li>
      <li v-if="allChapters.includes('biography')">
        <a href="#biography">Biography</a>
      </li>
      <li v-if="allChapters.includes('fieldofexpertise')">
        <a href="#fieldofexpertise">Field of Expertise</a>
      </li>
      <li v-if="allChapters.includes('services')">
        <a href="#services">Services</a>
      </li>
      <li v-if="allChapters.includes('businesssectors')">
        <a href="#businesssectors">Business Sectors</a>
      </li>
      <li v-if="allChapters.includes('allservices')">
        <a href="#allservices">All Services</a>
      </li>
      <li v-if="allChapters.includes('allindustries')">
        <a href="#allindustries">All Industries</a>
      </li>
      <li v-if="allChapters.includes('allareas')">
        <a href="#allareas">All Areas</a>
      </li>
      <li v-if="allChapters.includes('area')">
        <a href="#area">Area</a>
      </li>
      <li v-if="allChapters.includes('team')">
        <a href="#team">Team</a>
      </li>
      <li v-if="allChapters.includes('casestudies')">
        <a href="#casestudies">Case Studies</a>
      </li>
      <li v-if="allChapters.includes('aiteam')">
        <a href="#aiteam">AI Team</a>
      </li>
      <li v-if="allChapters.includes('cybersecurity')">
        <a href="#cybersecurity">Cyber Security</a>
      </li>
      <li v-if="allChapters.includes('cloudservices')">
        <a href="#cloudservices">Cloud Services</a>
      </li>
      <li v-if="allChapters.includes('digitalservices')">
        <a href="#digitalservices">Digital Services</a>
      </li>
      <li v-if="allChapters.includes('tellus')">
        <a href="#tellus">Tell Us More</a>
      </li>
      <li v-if="allChapters.includes('map')">
        <a href="#map">Where We Are</a>
      </li>
      <li v-if="allChapters.includes('ourcontacts')">
        <a href="#ourcontacts">Our Contacts</a>
      </li>
      <li v-if="allChapters.includes('csai')">
        <a href="#csai">AI Case Studies</a>
      </li>
      <li v-if="allChapters.includes('cscloud')">
        <a href="#cscloud">Cloud Case Studies</a>
      </li>
      <li v-if="allChapters.includes('csdigital')">
        <a href="#csdigital">Digital Case Studies</a>
      </li>
      <li v-if="allChapters.includes('cscybersec')">
        <a href="#cscybersec">Cybersecurity Case Studies</a>
      </li>
    </ul>
    <!-- Button to open/close the menu in smartphone view -->
    <div class="capBurger" @click="navSlide">
      <p>Ch.&nbsp;</p>
      <p id="arrow" ref="arrow" class="text-theme-color">
        <i class="fas fa-chevron-left"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LowBar',
  props: {
    // List of all anchors needed
    allChapters: { type: Array, default: () => [] },
    // List of all breadcrumbs needed
    breadcrumbs: { type: Array, default: () => [] },
    // Name of the page
    pageName: { type: String, default: () => '' },
  },
  data() {
    return {
      arrow: Object,
      capBurger: Object,
      chapters: Object,
      capLinks: Object,
    }
  },
  mounted() {
    // Once mounted load all the necessary dom connection for later usage
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
    hideNav() {
      // Hide Navbar links
      this.chapters.classList.add('navbar-invisible')
      // Burger Animation
      this.arrow.classList.remove('down-arrow')

      // Link fade animation
      this.capLinks.forEach((link, index) => {
        setTimeout(() => {
          link.style.animation = ''
        }, 300)
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
  top: 60px;
  z-index: 9;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lowBar * {
  transition: all 200ms, font-size 0s;
}

.lowBar ul {
  display: flex;
  flex-direction: row;
}

#chapters li {
  padding: 0 10px;
  font-family: 'Montserrat', sans-serif;
}

.capBurger > p:first-child {
  font-family: 'Montserrat', sans-serif;
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

.capBurger {
  cursor: pointer;
}

@media (max-width: 900px) {
  * {
    text-align: center;
  }
  #chapters {
    position: absolute;
    top: 30px;
    left: 0px;
    font-size: 2.2rem;
    height: calc(100vh - 90px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #ccc;
    transition: all 500ms, font-size 0s;
  }

  .lowBar a:hover {
    letter-spacing: 0px;
    padding: 0px 0px;
    color: #fff;
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
  .bread > ul > li:not(:last-child) {
    display: none;
  }
  .bread > ul > li {
    width: 100%;
  }
  .bread > ul > li > p {
    width: calc(100%);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .bread {
    max-width: 80%;
    max-height: 100%;
    overflow: hidden;
  }
}
@media (max-width: 350px) {
  #chapters {
    font-size: 1.8rem;
  }
}
</style>

<style>
/* NOT SCOPED because the name of the animation would change at runtime */
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
