<template>
  <div>
    <div class="normalTitle">
      <h2 href="tel:+0286816410">Get in touch!</h2>
    </div>
    <div class="containerForm">
      <form class="callback-form">
        <!-- Only 'responsive' part which is used to alert the user when an empty submission is fired -->
        <div id="alrt">
          <span class="error">{{ alrtError }}</span
          >{{ alrtThanks }}
        </div>
        <div class="form-control">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="user"
            name="name"
            placeholder="Your Name"
            type="text"
          />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
            type="email"
          />
        </div>
        <div class="form-control">
          <label for="phone">Phone</label>
          <input
            id="phone"
            v-model="phone"
            name="phone"
            placeholder="Your Phone"
            type="text"
          />
        </div>
        <div class="form-control">
          <label for="message">Tell Us More</label>
          <textarea
            id="message"
            v-model="msg"
            name="message"
            cols="15"
            rows="10"
            placeholder="Tell Us More"
          ></textarea>
        </div>
        <input
          type="submit"
          class="btn"
          value="Send"
          @click.prevent="resetForm"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSection',
  data() {
    return {
      user: '',
      email: '',
      phone: '',
      msg: '',
      alrtThanks: '',
      alrtError: '',
    }
  },
  methods: {
    resetForm() {
      if (
        this.user === '' ||
        this.email === '' ||
        this.phone === '' ||
        this.msg === ''
      ) {
        this.alrtError = 'Please enter all fields'
        setTimeout(() => (this.alrtError = ''), 3000)
      } else {
        this.alrtThanks = 'Thanks for submitting'
        setTimeout(() => (this.alrtThanks = ''), 3000)
        this.user = ''
        this.email = ''
        this.phone = ''
        this.msg = ''
      }
    },
  },
}
</script>

<style scoped>
/* Normal Title */
.normalTitle {
  display: flex;
  justify-content: left;
  position: relative;
  max-width: 1300px;
  margin: auto;
}

.normalTitle h2 {
  text-align: center;
  padding: 0px 5%;
  color: #333;
  font-size: 2.7rem;
  margin: 20px;
}
/* Form */
.containerForm {
  padding-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 600px;
  max-width: 1000px;
  margin: auto;
}

.callback-form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-control {
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-control input:focus,
.form-control textarea:focus {
  outline: none;
  border-bottom: var(--main_color) 2px solid;
}

.form-control input {
  font-weight: 600;
  border-radius: 5px;
  transition: 250ms;
  padding: 15px 5px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border: none;
  border-bottom: 2px #333 solid;
}

.form-control textarea {
  font-weight: 600;
  border-radius: 10px;
  transition: 250ms;
  padding: 5px;
  margin: 10px 0px;
  width: 100%;
  height: 150px;
  font-family: 'Open Sans', sans-serif;
  resize: none;
  border: none;
  border-bottom: 2px #333 solid;
}

.btn {
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  font-weight: 600;
  transition: 250ms;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: #333 1px solid;
  border-bottom: #333 2px solid;
  background-color: #fff;
}

.btn:hover {
  letter-spacing: 1px;
  color: #fff;
  width: 150px;
  height: 30px;
  font-weight: 800;
  border: var(--main_color) 1px solid;
  border-bottom: var(--main_color) 3px solid;
  background: var(--light_color);
}

.error {
  color: red;
}

@media (max-width: 750px) {
  .callback-form {
    width: 85%;
  }
}
</style>
