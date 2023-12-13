<template>
  <div>
    <div class="couponlig">
      <div class="head-couponlig">
        <div class="lig-name">
          <img
            src="../../assets/image/az.svg"
            alt="azerbaijan flag"
            class="flag"
          />
          <p>Azerbaijan: Premiere League</p>
        </div>
        <div class="pin-icon">
          <img src="../../assets/image/pin-icon.svg" alt="pin icon" />
        </div>
      </div>
      <div
        class="lig-card"
        v-for="card in cards"
        :key="card.id"
        @click="gameOption(card.id)"
      >
        <div class="time-sec">
          <p class="date">25 Oct <span class="time"> 20:00</span></p>
        </div>
        <div class="teams">
          <div class="team-first">
            <div class="team-head">
              <img src="../../assets/image/dinamo-kiev.svg" alt="team icon" />
              <h1>Dinamo Kiev</h1>
            </div>
          </div>
          <div class="team-second">
            <div class="team-head">
              <img src="../../assets/image/dnipro.svg" alt="team icon" />
              <h1>Dnipro-1 SK</h1>
            </div>
          </div>
        </div>
        <div class="coefficient">
          <div class="count-coefficient">2.84</div>
          <div class="count-coefficient">2.46</div>
          <div class="count-coefficient">2.09</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addCouponLig",
  props: ["couponLig"],
  data() {
    return {
      cards: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
      ],
    };
  },
  methods: {
    gameOption(cardId) {
      this.$emit("gameOption", cardId);
    },
  },
};
</script>

<style scoped></style>
