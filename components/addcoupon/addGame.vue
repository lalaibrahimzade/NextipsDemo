<template>
  <div class="addGame">
    <div>
      <countries />
    </div>
    <div>
      <addCouponLig
        :couponLig="couponLig"
        @gameOption="gameOption"
        v-if="viewedComponent == 'addCouponLig'"
      />
    </div>
    <div>
      <odds v-if="viewedComponent == 'odds'" @cuponCard="cuponCard" @updateBetId="updateBetId" @updateOddId="updateOddId" />
    </div>
    <!-- <div>
      <couponCard v-if="viewedComponent == 'cuponCard'" />
    </div> -->
  </div>
</template>

<script>
import eventBus from "~/plugins/event-bus";
import countries from "./countries";
import addCouponLig from "./addCouponLig";
import odds from "./odds";
import couponCard from "./couponCard";
export default {
  name: "addGame",
  components: { countries, addCouponLig, odds, couponCard },
  data() {
    return {
      viewedComponent: "addCouponLig",
      leaguesData: [],
      couponLig: {},
      coupon: {
        description: "Coupon Description",
      },
      couponItems: [
        {
          game_id: [],
          bet_id: [],
          odd_id: [],
        },
      ],
    };
  },

  methods: {
    addGameHandle(param) {
      this.viewedComponent = "addCouponLig";
    },

    gameOption(id) {
      console.log("Card ID:", id);
      this.couponItems[0].game_id=id;
      this.viewedComponent = "odds";
      console.log("Updated couponItems:", this.couponItems);
    },

    cuponCard(type) {
    this.leaguesData.push(type);
    console.log("Updated leaguesData:", this.leaguesData);
    eventBus.$emit('updateLeaguesData', this.leaguesData.length);
  },
    updateBetId(betId) {
      this.couponItems[0].bet_id=betId;
    },
    updateOddId(oddId) {
      this.couponItems[0].odd_id=oddId;
    },
  },

  created() {
    eventBus.$on("liveItemClick", () => {
      this.addGameHandle(true);
    });

    eventBus.$on("closeCard", () => {
      this.gameOption(true);
    });

    eventBus.$on("addNewCouponCard", () => {
      this.gameOption(true);
    });

    eventBus.$on("closeOdds", () => {
      this.addGameHandle(true);
    });
  },
};
</script>

<style scoped></style>
