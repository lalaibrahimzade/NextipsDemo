<template>
    <div class="explore-sec">
      <Explore :key="index" v-for="(coupon,index) in coupons"/>
    </div>
  
  </template>
  
  <script>
  import Explore from './explore';
  export default {
    name: "exploreSec",
    components : { Explore },
    data(){
      return{
        coupons:[1,2,3,4,5]
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  