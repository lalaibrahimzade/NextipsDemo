<template>
  <div class="login">
    <div class="part-1" v-if="step == 1">
      <div class="email-sec" v-if="signIn == 'email'">
        <h1 class="head-text">Sign in with email</h1>
        <p>
          To sign in the the platform, please, enter your email and password.
        </p>
        <div class="centered-main">
          <div class="email-input">
            <img
              src="../../assets/image/letter-icon.svg"
              alt="letter"
              class="letter"
            />
            <input class="email" v-model="form.email" placeholder="Your mail" />
          </div>
          <div class="pass-input">
            <img
              src="../../assets/image/lock.svg"
              alt="lock icon"
              class="lock"
            />
            <input
              v-model="form.password"
              :type="passwordVisible ? 'text' : 'password'"
              class="password"
              placeholder="Your password"
            />
            <div @click="passwordVisible = !passwordVisible">
              <i
                class="eye-icon"
                :class="passwordVisible ? 'fas fa-eye-slash ' : 'fas fa-eye'"
              ></i>
            </div>
          </div>
          <a href="#" class="forgot">Forgot password?</a>
          <button class="continue" @click="login()">Sign in</button>
          <a href="#" @click="signInOption()"
            ><img
              src="../../assets/image/right-arrow.svg"
              alt="left arrow"
              class="arrow"
            />Other sign in option</a
          >
        </div>
      </div>
      <div class="phone-sec" v-if="signIn == 'phone'">
        <h1 class="head-text">Sign in with number</h1>
        <p>
          To sign in the the platform, please, enter your number and password.
        </p>
        <div class="centered-main">
          <div class="number-input">
            <img
              src="../../assets/image/phone-icon.svg"
              alt="phone"
              class="phone"
            />
            <input
              class="number"
              v-model="form.email"
              placeholder="Your number"
            />
          </div>
          <div class="pass-input">
            <img
              src="../../assets/image/lock.svg"
              alt="lock icon"
              class="lock"
            />
            <input
              :type="passwordVisible ? 'text' : 'password'"
              class="password"
              placeholder="Your password"
            />
            <div @click="passwordVisible = !passwordVisible">
              <i
                class="eye-icon"
                :class="passwordVisible ? 'fas fa-eye-slash ' : 'fas fa-eye'"
              ></i>
            </div>
          </div>
          <a href="#" class="forgot">Forgot password?</a>
          <button class="continue" @click="nextStep()">Sign in</button>
          <a href="#"
            ><img
              src="../../assets/image/right-arrow.svg"
              alt="left arrow"
              class="arrow"
            />Other sign up option</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      step: 1,
      passwordVisible: false,
      repeatPasswordVisible: false,
      form: {
        email: null,
        otp: null,
        password: null,
      },
    };
  },
  props: ["signIn"],
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: { email: this.form.email, password: this.form.password },
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    nextStep() {
      this.step++;
    },
    signInOption(param) {
      this.$emit("signInOption");
    },
  },
};
</script>

<style scoped></style>
