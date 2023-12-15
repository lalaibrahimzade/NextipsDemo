<template>
  <div>
    <transition name="basket-modal-animation">
      <Basket
        v-if="basketModalIsOpen"
        @close="basketModalClose()"
        @leaguesLength="handleLeaguesLength"
        :leaguesDataLength="leaguesDataLength"
        @removeLeagueEvent="handleRemoveLeague"
      />
    </transition>
    <div class="right-sidebar">
      <div>
        <Search />
      </div>
      <div class="basket-btn" @click="basketModalHandle(true)">
        <p class="basket-text">Basket</p>
        <div class="basket-icon">
          <i class="fa-solid fa-basket-shopping"></i>
          <p class="basket-counter">{{ leaguesDataLength }}</p>
        </div>
      </div>
      <div>
        <Forecasters />
      </div>
      <div>
        <PopularUsers />
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../plugins/event-bus";
import Search from "./search";
import PopularUsers from "./popularUsers";
import Forecasters from "./forecasters";
import Basket from "../components/basket/basket";

export default {
  name: "rightSidebar",
  components: { Search, PopularUsers, Basket },

  data() {
    return {
      basketModalIsOpen: false,
      leaguesDataLength: 0,
    };
  },
  created() {
    eventBus.$on("updateLeaguesData", (length) => {
      this.leaguesDataLength = length;
    });
  },

  methods: {
    basketModalHandle(param) {
      this.basketModalIsOpen = true;
      this.$emit("basketModalOpenned");
    },
    basketModalClose(param) {
      this.basketModalIsOpen = false;
      this.$emit("basketModalIsClosed");
    },
    handleRemoveLeague(index) {
      // leaguesDataLength'ı azalt
      if (this.leaguesDataLength > 0) {
        this.leaguesDataLength -= 1;
      }
    },
  },
};
</script>

<style scoped>
.basket-modal-animation-enter-active,
.basket-modal-animation-leave-active {
  transition: transform 0.5s;
}

.basket-modal-animation-enter,
.basket-modal-animation-leave-to /* .basket-modal-animation-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}

.basket-modal-animation-enter-to,
.basket-modal-animation-leave /* .basket-modal-animation-leave-active in <2.1.8 */ {
  transform: translateX(0);
}
</style>
