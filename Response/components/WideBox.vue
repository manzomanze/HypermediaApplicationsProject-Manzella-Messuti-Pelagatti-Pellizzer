<template>
  <div>
    <div class="main-box">
      <h3 class="main-slide">Who Are We?</h3>
      <h4 class="secondary-slide">Find Out</h4>
    </div>
    <div class="main-box"></div>
    <div class="main-box"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
div {
  max-width: 1200px;
  margin: 50px auto;
}
div > .main-box:nth-child(odd) {
  margin: 30px auto;
  margin-left: 5px;
}
div > .main-box:nth-child(even) {
  margin: 30px auto;
  margin-right: 5px;
}
.main-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  height: 270px;
  width: 90%;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  border: 3px solid #00a2ff;
  border-radius: 10px;
}

.main-box,
.main-box * {
  transition: 200ms;
}

.main-box > h3 {
  padding: 20px;
  color: #fff;
  font-size: 3rem;
}
.main-box:hover > h4 {
  display: block;
  transform: translateX(0%);
  opacity: 1;
}
.main-box > h4 {
  opacity: 0;
  overflow: hidden;
  padding: 20px;
  color: #fff;
  font-size: 2.5rem;
  transform: translateX(-100%);
}
</style>
