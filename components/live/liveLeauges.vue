<template>
  <div>
    <div class="live-leauges-sec">
      <div
        class="collapse-sec"
        v-for="(collapse, index) in collapses"
        :key="index"
      >
        <div class="head-couponlig" @click="toggleCollapse(collapse.id)">
          <div class="lig-name">
            <img
              src="../../assets/image/az.svg"
              alt="azerbaijan flag"
              class="flag"
            />
            <p>{{collapse.name }}</p>
          </div>
          <div class="pin-icon">
            <img src="../../assets/image/pin-icon.svg" alt="pin icon" />
          </div>
          <div class="toggle">
            <img
              v-if="!isCollapsed(collapse.id)"
              src="../../assets/image/up-icon.svg"
              alt="icon"
            />
            <img v-else src="../../assets/image/down-arrow.svg" alt="icon" />
          </div>
        </div>
        <div class="lig-card" :class="{ 'collapsed': isCollapsed(collapse.id) }"
        v-for="lig in ligs">
          <div class="time-sec">
            <p class="time">{{ lig.time }} <span class="time-part">{{lig.timepart}}</span></p>
          </div>
          <div class="teams"  :key="lig.id">
            <div class="team-first">
              <div class="team-head">
                <img src="../../assets/image/dinamo-kiev.svg" alt="team icon" />
                <h1>{{ lig.name1 }}</h1>
              </div>
              <div class="count-team-first">
                <div class="count-team">{{ lig.score1}}</div>
                <div class="count-teamF">{{lig.score1f}}</div>
              </div>
            </div>
            <div class="team-second">
              <div class="team-head">
                <img src="../../assets/image/dnipro.svg" alt="team icon" />
                <h1>{{ lig.name2 }}</h1>
              </div>
              <div class="count-team-sec">
                <div class="count-team">{{ lig.score2}}</div>
                <div class="count-teamF">{{lig.score2f}}</div>
              </div>
            </div>
          </div>
          <div class="alarm-icon" @click="toggleAlarmStyle(index)">
            <img
              v-if="!isAlarmActive"
              src="../../assets/image/alarm-icon1.svg"
              alt="alarm icon"
              class="alarm-default active"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "liveLeauges",
  data() {
    return {
      collapses: [
        { id: 1, name: "Azerbaycan: Premiere League", flag: "../../assets/image/az.svg" },
      ],
      ligs: [
        { id: 1, name1: 'Dinamo Kiev', name2:'Dnipro-1 SK', time: "20:00", timepart:"-", score1:'-', score2:'-', score1f:"", score2f:""},
        { id: 2, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"Half time" , score1:0, score2:1, score1f:"(0)",score2f:"(1)"},
        { id: 3, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"70'" , score1:0, score2:1, score1f:"", score2f:""},
        { id: 4, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"Finished" , score1:0, score2:1},
        { id: 5, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"-" , score1:0, score2:1,score1f:"(0)",score2f:"(1)"},
        { id: 6, name1: 'Dinamo Kiev', name2:'Dnipro-1 SK', time: "20:00", timepart:"-", score1:'-', score2:'-', score1f:"", score2f:""},
        { id: 7, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"Half time" , score1:0, score2:1, score1f:"(0)",score2f:"(1)"},
        { id: 8, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"70'" , score1:0, score2:1, score1f:"", score2f:""},
        { id: 9, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"Finished" , score1:0, score2:1},
        { id: 10, name1: 'Dinamo Kiev', name2: 'Dnipro-1 SK', time: "12:00", timepart:"-" , score1:0, score2:1,score1f:"(0)",score2f:"(1)"},
      ],
      isCollapsedCountries: [],
    };
  },
  methods: {
    toggleAlarmStyle(index) {
      this.$emit("toggle-alarm", index);
    },
    toggleCollapse(id) {
      const index = this.isCollapsedCountries.indexOf(id);
      if (index === -1) {
        this.isCollapsedCountries.push(id);
      } else {
        this.isCollapsedCountries.splice(index, 1);
      }
    },
    isCollapsed(id) {
      return this.isCollapsedCountries && this.isCollapsedCountries.includes(id);
    },
  },
};
</script>

<style scoped></style>
