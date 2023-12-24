<template>
  <div class="basket-sec">
    <div class="basketheader">
      <div class="close" @click="$emit('close')">X</div>
      <p class="your-coupons">Basket</p>
    </div>
    <div class="tip-coupons">
      <div class="league-card">
        <div v-for="(coupon, index) in coupons" :key="index" class="league">
          <div class="league-header">
            <img
              src="../../assets/image/lig-icon.svg"
              alt="avatar"
              class="lig-icon"
            />
            <div class="lig-name">Ukraine Premiere League</div>
            <div class="close" @click="removeLeague(index)">X</div>
          </div>
          <div class="league-main">
            <div class="teams">
              <div class="team-sec">
                <div class="team-icon">
                  <img
                    src="../../assets/image/dinamo-kiev.svg"
                    alt="team icon"
                    class="team-icon"
                  />
                </div>
                <div class="team-name">Dinamo Kiev</div>
              </div>
              <div class="line"></div>
              <div class="team-sec">
                <div class="team-icon">
                  <img
                    src="../../assets/image/dnipro.svg"
                    alt="team icon"
                    class="team-icon"
                  />
                </div>
                <div class="team-name">Dnipro-1 SK</div>
              </div>
            </div>
            <div class="left-sec">
              <div class="time-sec">
                <div class="time">
                  <div class="time">21:00</div>
                  <div class="date">Dec 8</div>
                </div>
              </div>
            </div>
          </div>
          <div class="league-footer">
            <div class="goals">
              <div class="goals-status-name">Goals Over/Under</div>
              <div class="goals-status">Under 4.5</div>
            </div>
            <div class="odds-sec">
              <div class="odds">Odds</div>
              <div class="odds-score">1.44</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total-coefficient">
      <p>Total coefficient:</p>
      <p class="coefficient-count">38.33</p>
    </div>
    <div class="description-sec">
      <input
        type="text"
        class="description"
        placeholder="What do you think?.."
      />
    </div>
    <div class="paid-coupon verification">
      <p class="paid-text">Paid coupon</p>
      <div class="switch-btn">
        <input
          type="checkbox"
          id="switch-btn"
          v-model="showAmount"
        /><label for="switch-btn"></label>
      </div>
    </div>
    <div class="amount-sec" v-if="showAmount">
      <input type="text" class="amount" placeholder="nexcoins" />
    </div>
    <div class="post">Post</div>
  </div>
</template>
<script>
export default {
  name: "basket",
  props:['coupons'],
  data() {
    return {
      showAmount: false,
    };
  },
  methods: {
     removeLeague(index) {
        this.$store.commit('global/REMOVE_COUPON_ITEM', index);
  },
  },
}
  
</script>
<style scoped>
.hidden {
  display: none;
}
</style>