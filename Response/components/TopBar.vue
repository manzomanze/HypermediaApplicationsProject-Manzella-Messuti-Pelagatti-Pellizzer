<template>
  <div id="navbar" ref="doc" class="navbar">
    <div class="logo">
      <h1>
        <NuxtLink to="/#top"
          ><span class="text-primary">R</span>esponse</NuxtLink
        >
      </h1>
    </div>
    <nav>
      <!-- Actual navigation bar -->
      <!-- Every main section has class subsection -->
      <!-- Every sublist of links has class submenu -->
      <!-- Every link has an attribute @click used to hide the menu section in mobile view after pressing the link -->
      <ul class="nav-links">
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/about_us#top">About Us</NuxtLink>
          </div>
        </li>
        <li>
          <div class="subsection" onclick="">
            <p>Areas</p>
          </div>
          <ul class="submenu">
            <li @click="hideNav">
              <NuxtLink to="/areas#top">All Areas</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/4#top">AI</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/1#top">Cyber Security</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/2#top">Cloud Services</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/areas/3#top">Digital Services</NuxtLink>
            </li>
          </ul>
        </li>
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/services#top">Services</NuxtLink>
          </div>
        </li>
        <li>
          <div class="subsection" onclick="">
            <p>Industries</p>
          </div>
          <ul class="submenu">
            <li @click="hideNav">
              <NuxtLink to="/businesssectors#top">All Industries</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/4#top"
                >Aerospace & Defense</NuxtLink
              >
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/2#top">Automotive</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/1#top">Banking</NuxtLink>
            </li>
            <li @click="hideNav">
              <NuxtLink to="/businesssectors/3#top">Public Service</NuxtLink>
            </li>
          </ul>
        </li>
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/casestudies#top">Case Studies</NuxtLink>
          </div>
        </li>
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/team#top">Our Team</NuxtLink>
          </div>
        </li>
        <li @click="hideNav">
          <div class="subsection">
            <NuxtLink to="/contact_us#top">Contact Us</NuxtLink>
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
    this.x = window.matchMedia('(max-width: 900px)')
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
  height: 60px;
  background-color: #333;
  color: #fff;
  z-index: 11;
}

.navbar * {
  transition: all 200ms, font-size 0s;
  font-family: 'Montserrat', sans-serif;
}

/* Logo */
.navbar .logo a {
  color: #333;
}

.navbar .logo a:hover {
  color: #fff;
}

.navbar .logo {
  height: 60px;
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

.nav-links .subsection > p {
  cursor: default;
}

.nav-links .subsection {
  height: 60px;
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
  height: 50px;
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
  width: 60px;
  height: 60px;
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
@media (max-width: 900px) {
  /* Navbar */
  .nav-links {
    position: absolute;
    top: 60px;
    left: 0px;
    font-size: 2.5rem;
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #333;
    transform: translateX(100%);
  }

  .nav-links > li {
    opacity: 0;
    padding: 2%;
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
  /*
  .nav-links > li > .submenu {
    transition-delay: 200ms;
    display: none;
    visibility: hidden;
    opacity: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 0%;
    background-color: #333;
    transform: translateX(100px);
  }
  .nav-links > li:hover > .submenu {
    visibility: visible;
    display: flex;
    margin: 20px;
    margin-bottom: 0;
    opacity: 1;
    height: 100%;
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
  */
  .nav-links > li > .submenu > li {
    font-size: 1.5rem;
  }
  .nav-links > li:hover > .submenu > li {
    opacity: 1;
    height: 2.2rem;
    font-size: 1.5rem;
    width: 100%;
    border-bottom: 1px var(--main_color) solid;
  }
  /*
  .nav-links > li:hover > p {
    color: #ddd;
  }

  .nav-links > li > .submenu > a {
    color: var(--main_color);
  }

  .nav-links li .submenu a:hover {
    color: #ddd;
  }
  */
}

@media (max-width: 350px) {
  .nav-links > li > .submenu > li {
    font-size: 1.3rem;
  }
  .nav-links > li:hover > .submenu > li {
    opacity: 1;
    height: 2.2rem;
    font-size: 1.3rem;
    width: 100%;
    border-bottom: 1px var(--main_color) solid;
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
/* NOT SCOPED otherwise the name of the animation would change */
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
