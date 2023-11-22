
<template>
    <div class="sign-centered">
        <h1 class="head-text">{{ authType=='sign-up' ? 'Create an account for any action' : 'Sign in for any action'}}</h1>
          <div class="centered-main">
           <button class="centered-btn" @click="$emit(authType,'email')"><i class="fa-regular fa-envelope"></i> {{ authType=='sign-up' ? 'Sign up' : 'Sign In'}} with Email </button>

           <button class="centered-btn" @click="$emit(authType,'phone')"><i class="fa-regular fa-phone"></i> {{ authType=='sign-up' ? 'Sign up' : 'Sign In' }} with number</button>
          </div>
        <p>{{ authType=='sign-up' ? 'Already have an account?' : 'No account?' }} <a href="#"  @click="authType = authType == 'sign-up' ?  'sign-in' : 'sign-up' ">{{ authType=='sign-up' ? 'Sign in' : 'Create one' }}</a></p>
    </div>
</template>

<script>
export default {
    name: "auth-selection",
    props:['authType'],
}
</script>