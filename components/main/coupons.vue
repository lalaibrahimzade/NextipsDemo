<template>
  <div class="coupons">
    <Coupon v-for="coupon in coupons"/>
  </div>

</template>

<script>
import Coupon from './coupon.vue';
export default {
  name: "coupons",
  components : {Coupon},
  data(){
    return{
      coupons:[1,2,3,4,5]
    }
  }
}
</script>

<style scoped>

</style>
