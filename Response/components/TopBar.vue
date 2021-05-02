<template>
  <div id="navbar" ref="doc" class="navbar">
    <div class="logo">
      <h1>
        <a href=""><span class="text-primary">R</span>esponse</a>
      </h1>
    </div>
    <nav>
      <ul class="nav-links">
        <li>
          <div class="subsection">
            <a href="#">About Us</a>
          </div>
        </li>
        <li>
          <div class="subsection">
            <p>Services</p>
          </div>
          <ul class="submenu">
            <li>
              <a href="#">All Services</a>
            </li>
            <li>
              <a href="#">AI</a>
            </li>
            <li>
              <a href="#">Cyber Security</a>
            </li>
            <li>
              <a href="#">Digital Services</a>
            </li>
            <li>
              <a href="#">Cloud Services</a>
            </li>
          </ul>
        </li>
        <li>
          <div class="subsection">
            <p>Industries</p>
          </div>
          <ul class="submenu">
            <li>
              <a href="#">All Industries</a>
            </li>
            <li>
              <a href="#">IND 1</a>
            </li>
            <li>
              <a href="#">IND 2</a>
            </li>
            <li>
              <a href="#">IND 3</a>
            </li>
          </ul>
        </li>
        <li>
          <div class="subsection">
            <p>Team</p>
          </div>
          <ul class="submenu">
            <li>
              <a href="#">All Team</a>
            </li>
            <li>
              <a href="#">AI</a>
            </li>
            <li>
              <a href="#">Cyber Security</a>
            </li>
            <li>
              <a href="#">Digital Services</a>
            </li>
            <li>
              <a href="#">Cloud Services</a>
            </li>
          </ul>
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
    }
  },
  mounted() {
    this.burger = this.$refs.doc.querySelector('.burger')
    this.nav = this.$refs.doc.querySelector('.nav-links')
    this.navLinks = this.$refs.doc.querySelectorAll('.nav-links > li')
  },
  methods: {
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
  font-family: 'Lobster', cursive;
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
}

.nav-links > li a,
.nav-links > li p {
  display: block;
  color: #ec7404;
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
  height: 4vh;
  border-bottom: 1px #ec7404 solid;
}

.nav-links li:hover p {
  color: #ddd;
}

.nav-links li .submenu a {
  color: #ec7404;
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
  background-color: #ec7404;
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
    font-size: 3rem;
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
  }

  .nav-links > li:hover > .submenu > li {
    transition: all 100ms;
    opacity: 1;
    height: 6vh;
    font-size: 2rem;
    width: 100%;
    border-bottom: 1px #ec7404 solid;
  }

  .nav-links > li:hover > p {
    color: #ddd;
  }

  .nav-links > li > .submenu > a {
    color: #ec7404;
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
