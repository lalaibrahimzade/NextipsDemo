<template>
    <div class="addGame">
      <div> <countries/></div>
      <div><addCouponLig :couponLig="couponLig" @gameOption="gameOption" v-if="viewedComponent=='addCouponLig'"/></div>
      <div><odds  v-if="viewedComponent=='odds'" @cuponCard="cuponCard"/></div>
      <div><couponCard v-if="viewedComponent=='cuponCard'"/></div>
    </div>
</template>

<script>
import countries from './countries'
import addCouponLig from './addCouponLig';
import odds from './odds';
import couponCard from './couponCard'
export default {
  name: "addGame",
  components: { countries, addCouponLig, odds, couponCard},
  data(){
    return{
      viewedComponent:'addCouponLig',
     
    }
  },
  methods: {
    gameOption(type){
      this.viewedComponent="odds";
    },

    cuponCard(type){
      this.viewedComponent="cuponCard";
    }
  },
}
</script>

<style scoped>

</style>
