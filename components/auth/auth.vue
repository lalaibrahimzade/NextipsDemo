<template>
    <div class="sign-form">
      <div class="head-section">
         <div class="head-main">
          <button class="signUp head-btn"  @click="authType='sign-up'">Sign up</button>
          <button class="signIn head-btn"  @click="authType='sign-in'">Sign In</button>
         </div>
         <div class="close" @click="$emit('close')">x</div>
      </div>

      <auth-selection :authType="authType" @sign-up="handleSignUp" @sign-in="handleSignIn"  v-if="authType"/>
  
      <register v-if="authType==null && signUpWith" :signUp="signUpWith" @option="otherOption" />

      <login v-if="authType==null && signInWith" :signIn="signInWith" @signInOption="signInOption"/>
      
      <div class="footer-section">
          <p>Click “Sign Up” to agree to Nextips’ Terms of Service and acknowledge that Nextips’ Privacy Policy applies to you.</p>
      </div>
  </div>


</template>

<script>
import authSelection from './auth-selection';
import register from './register';
import login from './login';

export default {
  name: "auth",
  components: { authSelection, register,login},
  data(){
    return{
      viewedComponent:'auth-selection',
      authType:'sign-up' && 'sign-in',
      signInWith:null,
      signUpWith:null,

    }
  },
  methods:{
    handleSignUp(type){
      this.signUpWith=type
      this.signInWith=null
      this.authType=null
      
    },
    handleSignIn(type){
      this.authType=null
      this.signUpWith=null
      this.signInWith=type
    },

    otherOption(type){
      this.authType=true
      this.signUpWith=null
      this.signInWith=null
    },

    signInOption(type){
      this.authType=true
      this.signUpWith=null
      this.signInWith=null
    },
    closeOverlay() {
    this.$emit('close');
  },
  }
}
</script>

<style scoped>

</style>
