<template>
  <div>
    <div class="create-password">
      <div class="step-1" v-if="step == 1">
        <div class="email-sec" v-if="signUp == 'email'">
          <h1 class="head-text">Sign up with email</h1>
          <div class="centered-main">
            <div class="pass-input">
              <img
                src="../../assets/image/letter-icon.svg"
                alt="lock icon"
                class="letter"
              />
              <input
                class="password"
                v-model="form.email"
                placeholder="Your mail"
              />
            </div>
            <button class="continue" @click="nextStep()">Continue</button>
            <a href="#" @click="otherOption(true)"
              ><img
                src="../../assets/image/right-arrow.svg"
                alt="left arrow"
                class="arrow"
              />Other sign up option</a
            >
          </div>
        </div>
        <div class="phone-sec" v-if="signUp == 'phone'">
          <h1 class="head-ph">Sign up with number</h1>
          <div class="centered-main">
            <div class="pass-input">
              <img
                src="../../assets/image/phone-icon.svg"
                alt="lock icon"
                class="phone"
              />
              <input class="password" placeholder="Your number" />
            </div>
            <button class="continue" @click="nextStep()">Continue</button>
            <a href="#" @click="otherOption()" class="other-option"
              ><img
                src="../../assets/image/right-arrow.svg"
                alt="left arrow"
                class="arrow"
              />Other sign up option</a
            >
          </div>
        </div>
      </div>
      <div class="step-2" v-if="step == 2">
        <div class="otp-text">
          <h1 class="head-text">Confirm your email</h1>
          <p class="otp-paragraf">
            Please, enter the OTP code send to example@mail.com
          </p>
        </div>
        <div class="centered-main">
          <div class="userInput text-center mb-3">
            <input
              v-for="(digit, index) in otp"
              :key="index"
              v-model="otp[index]"
              class="otpinput"
              maxlength="1"
              :ref="`otpInput${index}`"
              @input="handleInput(index)"
              @keypress="validateInput"
            />
          </div>
          <button class="centered-btn continue" @click="nextStep()">
            Continue
          </button>
        </div>
        <p>Didn’t get the code? <a href="#">Send it again</a></p>
      </div>
      <div class="step-3" v-if="step == 3">
        <h1 class="head-text">Create password</h1>
        <p>
          To sign in the the platform, please, enter your email and password.
        </p>
        <div class="centered-main">
          <input type="text" placeholder="Username" class="username" />
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
          <div class="pass-input">
            <img
              src="../../assets/image/lock.svg"
              alt="lock icon"
              class="lock"
            />
            <input
              :type="repeatPasswordVisible ? 'text' : 'password'"
              class="password"
              placeholder="Repeat password"
            />
            <div @click="repeatPasswordVisible = !repeatPasswordVisible">
              <i
                class="eye-icon"
                :class="
                  repeatPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'
                "
              ></i>
            </div>
          </div>
          <button class="sign-in">Sign in</button>
        </div>
      </div>
    </div>
    <login v-if="authModalIsOpen" @close="authModalIsOpen = false" />
  </div>
</template>

<script>
import login from "./login";
export default {
  name: "resgiter",
  data() {
    return {
      otp: ["", "", "", ""],
      step: 1,
      passwordVisible: false,
      repeatPasswordVisible: false,
      form: {
        email: null,
        otp: null,
      },
    };
  },
  props: ["signUp"],
  methods: {
    nextStep() {
      this.step++;
    },

    otherOption(param) {
      this.$emit("option");
    },

    handleInput(index) {
      const value = this.otp[index];
      if (value && index < this.otp.length - 1) {
        this.$refs[`otpInput${index + 1}`][0].focus();
      } else if (!value && index > 0) {
        this.$refs[`otpInput${index - 1}`][0].focus();
      }
    },
    validateInput(event) {
      const keyCode = event.keyCode;
      if (!(keyCode >= 48 && keyCode <= 57)) {
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped></style>
