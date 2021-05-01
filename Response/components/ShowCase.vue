<template>
  <div class="showcase">
    <div class="container">
      <h2>
        <span class="text-primary">A</span>rtificial
        <span class="text-primary">I</span>ntelligence
      </h2>
      <h3 class="text-grey">Data has a better idea</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowCase',
}
</script>

<style scoped>
/* Showcase */
.showcase {
  position: relative;
}

.showcase .container * {
  z-index: 1;
}

.showcase .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background: url('~/static/img/AI_01.jpg') center center/cover no-repeat;
}

.showcase .container h2 {
  font-size: 3rem;
  text-shadow: 2px 2px #ec7404;
  color: #fff;
  padding-bottom: 15px;
}

.showcase .container h3 {
  text-shadow: 2px 2px #444;
}

.showcase .container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
</style>
