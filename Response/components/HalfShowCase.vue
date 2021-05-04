<template>
  <div class="halfShowcase">
    <div
      class="left-box"
      :style="`background: url('/img/p_01.jpg') center center/cover no-repeat`"
    >
      <h2>Nome Cognome</h2>
      <div class="occupation">
        <i class="fas fa-user-tie"></i>
        <h3 class="text-grey">
          Senior Manager, Digital Manufacturing & Operations
        </h3>
      </div>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <h4 class="text-grey">Houston, Texas</h4>
      </div>
    </div>
    <div class="right-box">
      <h2>WHAT I DO</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HalfShowCase',
}
</script>

<style scoped>
/* Half Showcase */
.halfShowcase {
  padding: 20px 0px;
  display: flex;
  position: relative;
  margin: auto;
  margin-top: 9vh;
  max-width: 1000px;
}

.halfShowcase .container * {
  z-index: 1;
}

.halfShowcase .left-box .location,
.halfShowcase .left-box .occupation {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.3);
}

.halfShowcase .left-box i {
  color: #ec7404;
  margin-right: 10px;
}

.halfShowcase .left-box {
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  width: 50%;
  height: 50vh;
  border-radius: 40px;
}

.halfShowcase .left-box h2 {
  border-radius: 15px;
  color: #fff;
  font-size: 2.1rem;
  padding: 0 10px 5px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.3);
}

.halfShowcase .right-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50vh;
}

.halfShowcase .right-box h2 {
  padding: 0px 10px;
  color: #ec7404;
  font-size: 3rem;
  border-bottom: #ec7404 4px solid;
}

.halfShowcase .container h2 {
  color: #fff;
  padding-bottom: 15px;
}

.halfShowcase .container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

@media (max-width: 1000px) {
  .halfShowcase {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 750px) {
  .halfShowcase {
    padding: 20px auto 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    margin-top: 9vh;
    max-width: 1000px;
  }

  .halfShowcase .left-box,
  .halfShowcase .right-box {
    width: 100%;
  }

  .halfShowcase .right-box {
    height: 20vh;
  }
}
</style>
