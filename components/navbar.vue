<template>
  <nav class="navbar-main align-items-center">
    <div class="parent" v-show="pathname !== '/settings'">
      <div class="child c-first">
        <nuxt-link to="">
          <a href="#" class="me-2 text-light">For You</a>
        </nuxt-link>
        <nuxt-link to="">
          <a href="#" class="ms-2">Following</a>
        </nuxt-link>
      </div>
      <div class="child c-second">
        <nuxt-link to="">
          <a href="#" class="me-2 text-light">Free</a>
        </nuxt-link>
        <nuxt-link to="">
          <a href="#" class="ms-2">Paid</a>
        </nuxt-link>
      </div>
    </div>
    <div class="setting-nav" v-show="pathname === '/settings'">
      <div class="setting-links">
        <img src="../assets/image/arrow-left.svg" alt="left arrow icon" />
        <div class="account" @click="openAccountInformation">
          <a href="#">Account</a>
        </div>
        <div class="company-support">
          <a href="#">Company&Support</a>
        </div>
        <div class="login-btn">
          <a href="#">Login</a>
        </div>
      </div>
      <div class="search-sec">
        <img src="../assets/image/search.svg" alt="search icon" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    pathname() {
      return this.$route.path;
    },
  },
  methods: {
    openAccountInformation() {
      eventBus.$emit("openAccountInformation");
    },
  },
};
</script>

<style scoped></style>
