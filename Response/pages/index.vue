<template>
  <div>
    <ShowCase
      :title="'Response'"
      :text="null"
      :image="{ path: '/img/test_bellaraga.jpg' }"
      :is-main="true"
    />
    <div class="main-box">
      <h3>Who are we?</h3>
      <p>
        A global leader in consulting, technology services and digital
        transformation, Response is at the forefront of innovation to address
        the entire breadth of clients’ opportunities in the evolving world of
        cloud, digital and platforms.
      </p>
      <NuxtLink to="/about_us#top" class="btn">More About Us</NuxtLink>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="main-box">
      <h3>Our areas of expertise</h3>
      <p>
        The Group’s sectorial expertise ensures that we are always up to speed
        with the challenges facing our clients and developing solutions tailored
        to their specific objectives. The Group has a presence in four sectors:
      </p>
      <div class="flexbox">
        <div>
          <NuxtLink to="/areas/4#top" class="big-btn"
            >Artificial Intelligence</NuxtLink
          >
          <NuxtLink to="/areas/1#top" class="big-btn">Cyber Security</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/areas/2#top" class="big-btn">Cloud Services</NuxtLink>
          <NuxtLink to="/areas/3#top" class="big-btn">Digital Services</NuxtLink>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="main-box">
      <h3>Contact Us!</h3>
      <p>Got a question? We’re here to help!</p>
      <NuxtLink to="/contact_us#top" class="btn">Contact Us</NuxtLink>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Imposto le transizioni */
.main-box,
.main-box * {
  transition: 200ms;
}

.main-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  width: 70%;
  border-radius: 10px;
}

.main-box > .flexbox {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-box > .flexbox > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
}

.main-box > h3 {
  margin: 15px 0px;
  width: 100%;
  text-align: left;
  color: #4d80b9;
  font-size: 250%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.main-box > p {
  width: 100%;
  margin: 15px auto;
  margin-left: 8%;
  padding-right: 10%;
  font-size: 27px;
  line-height: 40px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 300px;
  height: 80px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #4d80b9;
  border: 2px solid #4d80b9;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.btn:hover {
  color: #4d80b9;
  padding: 10px 20px;
  border-radius: 10px;
  letter-spacing: 2px;
  border: 2px solid #4d80b9;
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.big-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  width: 300px;
  height: 80px;
  color: #fff;
  border-radius: 10px;
  background-color: #4d80b9;
  border: 3px solid #4d80b9;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.big-btn:hover {
  color: #4d80b9;
  border-radius: 10px;
  letter-spacing: 1px;
  border: 3px solid #4d80b9;
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

@media (max-width: 750px) {
  .main-box {
    width: 85%;
  }
  .main-box > h3 {
    margin: 15px 0px;
    width: 100%;
    font-size: 250%;
    text-align: left;
  }
  .main-box > p {
    margin-left: 7%;
    margin-right: 1%;
    font-size: 25px;
  }
}
</style>
