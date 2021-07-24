<template>
  <div class="contact-info">
    <!-- Useful info about Response -->
    <div class="container">
      <div class="box">
        <i class="fas fa-hotel fa-3x"></i>
        <h3>Location</h3>
        <p>Piazza Gae Aulenti, 20154 Milano MI</p>
      </div>
      <div class="box">
        <a class="fas fa-phone fa-3x" href="tel:+0286816410"></a>
        <h3>Phone Number</h3>
        <p>+02 86816410</p>
      </div>
      <div class="box">
        <a
          class="fas fa-envelope fa-3x"
          href="email:pelagatti.mariano@gmail.com"
        ></a>
        <h3>Email Address</h3>
        <p>info@response.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
}
</script>

<style scoped>
* {
  color: #333;
}
.contact-info {
  margin: auto;
  max-width: 1000px;
}

.contact-info .container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.contact-info .container .box:hover {
  transform: scale(1.1) translateY(-1%);
  color: var(--main_color);
}

.contact-info .container .box {
  cursor: pointer;
  transition-duration: 250ms;
  padding: 10px;
  width: 165px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 10px;
}

@media (max-width: 750px) {
  .contact-info .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
