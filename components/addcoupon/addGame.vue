<template>
    <div class="addGame">
      <div> 
        <countries/>
      </div>
      <div>
        <addCouponLig :couponLig="couponLig" @gameOption="gameOption" v-if="viewedComponent=='addCouponLig'"/>
      </div>
      <div>
        <odds  v-if="viewedComponent=='odds'" @cuponCard="cuponCard"/>
      </div>
      <div>
        <couponCard v-if="viewedComponent=='cuponCard'"/>
      </div>
    </div>
</template>

<script>
import eventBus from '~/plugins/event-bus';
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
    addGameHandle(param) {
      this.viewedComponent="addCouponLig";
    },

    gameOption(type){
      this.viewedComponent="odds";
    },

    cuponCard(type){
      this.viewedComponent="cuponCard";
    }
  },

  created() {
    eventBus.$on('liveItemClick', () => {
      this.addGameHandle(true);
    });

    eventBus.$on('closeCard', () => {
      this.gameOption(true);
    });

    eventBus.$on('addNewCouponCard', () =>{
      this.gameOption(true);
    });

    eventBus.$on('closeOdds', () =>{
      this.addGameHandle(true);
    });
  },
 
}
</script>

<style scoped>

</style>
