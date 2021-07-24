<template>
  <div class="socialBlock">
    <div class="container fa-3x">
      <div class="slide" onclick="window.location='#';">
        <i class="fab fa-facebook"></i>
      </div>
      <div class="slide" onclick="window.location='#';">
        <i class="fab fa-twitter"></i>
      </div>
      <div class="slide" onclick="window.location='#';">
        <i class="fab fa-google"></i>
      </div>
      <div class="slide" onclick="window.location='#';">
        <i class="fab fa-linkedin"></i>
      </div>
      <div class="slide" onclick="window.location='#';">
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialBlock',
}
</script>

<style scoped>
.socialBlock {
  margin: auto;
  max-width: 1000px;
  align-items: center;
  color: #333;
}

.socialBlock .container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10%;
  padding-bottom: 0%;
  padding-top: 0%;
}

.socialBlock .container .slide:hover {
  transform: scale(1.4) translateY(-5%);
  color: var(--main_color);
}

.socialBlock .container .slide {
  cursor: pointer;
  transition-duration: 250ms;
  padding: 5%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
}

.fa-3x {
  font-size: 250% !important;
}
</style>
