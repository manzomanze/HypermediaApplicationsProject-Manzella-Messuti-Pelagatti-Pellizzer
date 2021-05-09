<template>
  <div class="social-bar fa-2x">
    <p class="fakeLink"><i class="fab fa-facebook"></i></p>
    <p class="fakeLink"><i class="fab fa-twitter"></i></p>
    <p class="fakeLink"><i class="fab fa-google"></i></p>
    <p class="fakeLink"><i class="fab fa-linkedin"></i></p>
    <p class="fakeLink"><i class="fab fa-youtube"></i></p>
  </div>
</template>

<script>
export default {
  name: 'SocialButtons',
}
</script>

<style scoped>
/* Social bar */
.social-bar {
  margin-left: 0.5%;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.514);
  border-radius: 10px;
  z-index: 1;
}

.social-bar a {
  color: #333;
}

.social-bar * {
  transition-duration: 200ms;
}

.social-bar a:hover {
  color: #ec7404;
  transform: scale(1.1) translateX(10%);
}

.social-bar .fakeLink {
  cursor: pointer;
  color: #333;
}

.social-bar .fakeLink:hover {
  color: #ec7404;
  transform: scale(1.1) translateX(10%);
}

@media (max-width: 750px) {
  .social-bar {
    flex-direction: row;
    justify-content: space-around;
    width: 225px;
    top: 95%;
    left: 50%;
    transform: translateY(-80%) translateX(-50%);
  }

  .social-bar a:hover {
    transform: scale(1.1) translateY(-10%);
  }
}
</style>
