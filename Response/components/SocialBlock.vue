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
}

.socialBlock .container .slide:hover {
  transform: scale(1.4) translateY(-5%);
  color: #ec7404;
}

.socialBlock .container .slide {
  cursor: pointer;
  transition-duration: 250ms;
  padding: 10px;
  width: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  border-radius: 10px;
}
</style>
