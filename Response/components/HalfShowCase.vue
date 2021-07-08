<template>
  <div class="halfShowcase">
    <div class="left-box" :style="imagePath()">
      <h2>{{ name }} {{ surname }}</h2>
      <div class="occupation">
        <i class="fas fa-user-tie"></i>
        <h3>
          {{ role }}
        </h3>
      </div>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <h4>{{ location }}</h4>
      </div>
    </div>
    <div class="right-box">
      <h2>{{ name }} {{ surname }}</h2>
      <div class="occupation">
        <i class="fas fa-user-tie"></i>
        <h3>
          {{ role }}
        </h3>
      </div>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <h4>{{ location }}</h4>
      </div>
      <NuxtLink :to="`/areas/${areaid}`">
        <img :src="`/images/areas/Icon/${areaid}.png`" alt="Area Icon" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HalfShowCase',
  props: {
    name: { type: String, default: () => '' },
    surname: { type: String, default: () => '' },
    location: { type: String, default: () => '' },
    role: { type: String, default: () => '' },
    image: { type: Object, default: () => null },
    areaid: { type: Number, default: () => 0 },
  },
  methods: {
    imagePath() {
      if (this.image == null) {
        return `background: url('/img/p_01.jpg') center center/cover no-repeat;`
      } else {
        return `background: url('${this.image.path}') center center/cover no-repeat;`
      }
    },
  },
}
</script>

<style scoped>
.right-box NuxtLink {
  height: 50%;
  width: 40%;
}

.right-box img {
  height: 100%;
  width: 40%;
  margin-left: 40px;
  object-fit: cover;
}

/* Half Showcase */
.halfShowcase {
  padding: 20px 0px;
  display: flex;
  position: relative;
  margin: auto;
  text-shadow: 1px 1px var(--main_color);
  color: #fff;
  margin-top: 90px;
  max-width: 1000px;
}

.halfShowcase .container * {
  z-index: 1;
}

.halfShowcase .left-box * {
  visibility: hidden;
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
  height: 60vh;
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

.halfShowcase .right-box .location,
.halfShowcase .right-box .occupation {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 1.3rem;
  text-shadow: 0px 0px #fff;
  color: #333;
  background-color: rgba(0, 0, 0, 0);
}

.halfShowcase .right-box i {
  margin-right: 10px;
}

.halfShowcase .right-box {
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  width: 50%;
  height: 60vh;
  border-radius: 40px;
}

.halfShowcase .right-box h2 {
  border-radius: 15px;
  font-size: 2.1rem;
  padding: 0 10px 5px;
  margin-bottom: 10px;
  text-shadow: 0px 0px #fff;
  color: #333;
  background-color: rgba(0, 0, 0, 0);
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
    margin-top: 90px;
    max-width: 1000px;
  }

  .halfShowcase .left-box * {
    visibility: visible;
  }

  .halfShowcase .left-box,
  .halfShowcase .right-box {
    width: 100%;
  }

  .halfShowcase .right-box {
    display: none;
    height: 0vh;
  }
}
</style>
