<template>
    <div class="company">
        <div class="company-main">
            <div class="company-items">
              <img src="../../../assets/image/list-pen-icon.svg" alt="icon">
              <nuxt-link to="/settings/company/report">
              <a>Report a problem</a>
             </nuxt-link>
            </div>
            <div class="company-items">
              <img src="../../../assets/image/info-icon.svg" alt="icon">
              <nuxt-link to="/settings/company/about-us">
              <a>About us</a>
            </nuxt-link>
            </div>
            <div class="company-items">
              <img src="../../../assets/image/paper-icon.svg" alt="icon">
              <nuxt-link to="/settings/company/termsAndCondition">
              <a>Terms&Conditions</a>
            </nuxt-link>
            </div>
            <div class="company-items">
              <img src="../../../assets/image/paper-icon-two.svg" alt="icon">
              <nuxt-link to="">
              <a>Privacy Policy</a>
            </nuxt-link>
            </div>
           </div>
    </div>
</template>

<script>
export default {
  name: "mainSec",
  props:['companyItem'],
  methods: {
    reportSec(param){
          this.$emit('reportSec')
    },
  },
}
</script>

<style scoped>

</style>
