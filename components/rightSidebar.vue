<template>
  <div>
    <transition name="basket-modal-animation">
      <Basket v-if="basketModalIsOpen" @close="basketModalClose()"  :coupons="coupons"/>
    </transition>
    <div class="right-sidebar">
      <div>
        <Search />
      </div>
      <div class="basket-btn" @click="basketModalHandle(true)">
        <p class="basket-text">Basket</p>
        <div class="basket-icon">
          <i class="fa-solid fa-basket-shopping"></i>
          <p class="basket-counter">{{ coupons.length }}</p>
        </div>
      </div>
      <div>
        <Forecasters />
      </div>
      <div>
        <PopularUsers />
      </div>
      <!-- <div>
        <FooterSection/>
      </div> -->
    </div>
  </div>
</template>

<script>
import Search from "./search";
import PopularUsers from "./popularUsers";
import Forecasters from "./forecasters";
import Basket from "../components/basket/basket";
import {mapGetters} from "vuex";
import FooterSection from "../layouts/footer-section";

export default {
  name: "rightSidebar",
  components: { Search, PopularUsers, Basket, FooterSection },
  props: {
    leaguesDataLength: Number,
  },
  data() {
    return {
      basketModalIsOpen: false,
    };
  },

  computed: {
    ...mapGetters({
      coupons: 'global/getCoupons',
    })
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
  },
};
</script>

<style scoped>
.basket-modal-animation-enter-active,
.basket-modal-animation-leave-active {
  transition: transform 0.5s;
}

.basket-modal-animation-enter,
.basket-modal-animation-leave-to {
  transform: translateX(100%);
}

.basket-modal-animation-enter-to,
.basket-modal-animation-leave {
  transform: translateX(0);
}
</style>
