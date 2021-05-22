<template>
  <div id="navbar" ref="doc" class="navbar">
    <div class="logo">
      <h1>
        <NuxtLink to="/"><span class="text-primary">R</span>esponse</NuxtLink>
      </h1>
    </div>
    <nav>
      <ul class="nav-links">
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/about_us">About Us</NuxtLink>
          </div>
        </li>
        <li>
          <div class="subsection">
            <p>Services</p>
          </div>
          <ul class="submenu">
            <li @click="hideNav">
              <NuxtLink to="/services">All Services</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/4">AI</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/1">Cyber Security</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/2">Cloud Services</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/3">Digital Services</NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <div class="subsection">
            <p>Industries</p>
          </div>
          <ul class="submenu">
            <li @click="hideNav">
              <NuxtLink to="/businesssectors">All Industries</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/4">Aerospace & Defense</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/2">Automotive</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/1">Banking</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/3">Public Service</NuxtLink>
            </li>
          </ul>
        </li>
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/team">Our Team</NuxtLink>
          </div>
        </li>
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/contact_us">Contact Us</NuxtLink>
          </div>
        </li>
      </ul>
      <div class="burger-container">
        <div class="burger" @click="navSlide">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      burger: Object,
      nav: Object,
      navLinks: Object,
      enabled: false,
    }
  },
  mounted() {
    this.burger = this.$refs.doc.querySelector('.burger')
    this.nav = this.$refs.doc.querySelector('.nav-links')
    this.navLinks = this.$refs.doc.querySelectorAll('.nav-links > li')

    // Setup the listener
    this.x = window.matchMedia('(max-width: 750px)')
    this.x.addListener(this.screenChange)
    this.screenChange(this.x)
  },
  methods: {
    screenChange(x) {
      if (x.matches) {
        // Small Screen
        this.enabled = true
      } else {
        this.enabled = false
      }
    },
    hideNav() {
      if (this.enabled) {
        this.navSlide()
      }
    },
    navSlide() {
      // Show or Hide Navbar links
      this.nav.classList.toggle('navbar-visible')
      // Burger Animation
      this.burger.classList.toggle('switch')

      // Link fade animation
      this.navLinks.forEach((link, index) => {
        if (link.style.animation) {
          setTimeout(() => {
            link.style.animation = ''
          }, 300)
        } else {
          // link.style.opacity = 1
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
/* Navbar */
.navbar {
  opacity: 0.95;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: center;
  justify-content: space-between;
  height: 6vh;
  background-color: #333;
  color: #fff;
  z-index: 11;
}

.navbar * {
  transition: 200ms;
}

/* Logo */
.navbar .logo a {
  color: #333;
}

.navbar .logo a:hover {
  color: #fff;
}

.navbar .logo {
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar .logo > * {
  display: block;
}

.navbar .logo h1 {
  font-size: 1.7rem;
  letter-spacing: -10px;
  margin: 0px 15px;
  font-weight: 500;
}

.navbar .logo:hover h1 {
  letter-spacing: 1px;
}

.navbar .logo h1 .text-primary {
  font-family: 'Lobster';
}

/* Nav Link */
.nav-links {
  display: flex;
}

.nav-links > li {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 120px;
  max-width: 150px;
}

.nav-links > li a,
.nav-links > li p {
  display: block;
  color: var(--main_color);
  padding: 1px 10px;
  margin: 0 5px;
}

.nav-links .subsection {
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-links li a:hover {
  color: #fff;
  /* border-bottom: #fff 2px solid; */
}

/* Submenu */
.nav-links li .submenu {
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  background-color: #333;
}

.nav-links li .submenu li {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  height: 0;
}

.nav-links li:hover .submenu {
  visibility: visible;
  opacity: 1;
}

.nav-links li:hover .submenu li {
  width: 100%;
  height: 5vh;
  border-bottom: 1px var(--main_color) solid;
}

.nav-links li:hover p {
  color: #ddd;
}

.nav-links li .submenu a {
  color: var(--main_color);
}

.nav-links li .submenu a:hover {
  color: #ddd;
}

/* Burger Button */
.burger {
  display: none;
}

.burger-container {
  width: 6vh;
  height: 6vh;
  display: none;
  align-items: center;
  justify-content: center;
}

.burger > div {
  width: 25px;
  height: 3px;
  background-color: var(--main_color);
  margin: 5px;
}

.nav-links a.current {
  color: #fff;
}

/* Mobile */
@media (max-width: 750px) {
  /* Navbar */
  .nav-links {
    position: absolute;
    top: 6vh;
    left: 0px;
    font-size: 2.5rem;
    height: 94vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #333;
    transform: translateX(100%);
    transition: 200ms;
  }

  .nav-links > li {
    opacity: 0;
    padding: 6%;
    max-width: 100%;
  }

  .navbar-visible {
    transform: translateX(0);
  }

  .burger {
    display: block;
    cursor: pointer;
    margin: auto;
  }

  .burger-container {
    display: flex;
  }

  /* Submenu */
  .nav-links > li > .submenu {
    display: none;
    visibility: hidden;
    opacity: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    background-color: #333;
    transform: translateX(100px);
  }

  .nav-links > li:hover > .submenu {
    visibility: visible;
    display: flex;
    margin: 20px;
    margin-bottom: 0;
    opacity: 1;
    transform: translateX(0px);
  }

  .nav-links > li > .submenu > li {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    height: 0;
    width: 100%;
  }

  .nav-links > li:hover > .submenu > li {
    transition: all 100ms;
    opacity: 1;
    height: auto;
    font-size: 1.5rem;
    width: 100%;
    border-bottom: 1px var(--main_color) solid;
  }

  .nav-links > li:hover > p {
    color: #ddd;
  }

  .nav-links > li > .submenu > a {
    color: var(--main_color);
  }

  .nav-links li .submenu a:hover {
    color: #ddd;
  }
}
/* Burger Animation */
.switch .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.switch .line2 {
  opacity: 0;
}
.switch .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
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
