<template>
  <div class="couponCard">
    <div class="league-couponCard">
          <div class="league-card">
            <div class="league" >
              <div class="league-header">
                <img
                  src="../../assets/image/lig-icon.svg"
                  alt="avatar"
                  class="lig-icon"
                />
                <div class="lig-name">Ukraine Premiere League</div>
                <div class="close" @click="close">X</div>
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
    <div class="footer-cuponCard">
      <button class="post">Post</button>
      <button class="add-new" @click="addNew">Add new</button>
    </div>
  </div>
</template>

<script>
import eventBus from "~/plugins/event-bus";
export default {
  name: "couponCard",
  methods: {
    close() {
      eventBus.$emit("closeCouponCard");
    },
    addNew() {
      eventBus.$emit("addNewCouponCard");
    },
  },
};
</script>

<style scoped></style>
