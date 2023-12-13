<template>
    <div class="odds-section">
        <div class="odds">
          <div class="head-couponlig">
            <div class="lig-name">
                <img src="../../assets/image/az.svg" alt="azerbaijan flag" class="flag">
                <p>Azerbaijan: Premiere League</p>
            </div>
            <div class="close" @click="close()">X</div>
        </div>
        <div class="lig-card">
            <div class="time-sec">
                <p class="date">25 Oct <span class="time"> 20:00</span></p>
            </div>
            <div class="teams">
                <div class="team-first">
                    <div class="team-head">
                        <img src="../../assets/image/dinamo-kiev.svg" alt="team icon">
                    <h1>Dinamo Kiev</h1>
                    </div>
                </div>
                <div class="team-second">
                   <div class="team-head">
                    <img src="../../assets/image/dnipro.svg" alt="team icon">
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
      <div class="odds-information-sec" v-for="(collapse, index) in collapses" :key="index">
        <div class="odds-information" @click="toggleCollapse(collapse.id)">
            <p>{{collapse.name }}</p>
            <div class="icon">
                <img v-if="!isCollapsed(collapse.id)" src="../../assets/image/down-arrow.svg"/>
                <img v-else src="../../assets/image/r-arrow.svg"/>
            </div>
        </div>
        <ul :class="{ 'collapsed': isCollapsed(collapse.id) }">
            <li v-for="odd in odds" :key="odd.id">
                 <div class="odds-item" @click="cuponCard()">{{ odd.name }} : 3.16</div>
          </li>
          </ul>
      </div>
    </div>
    
</template>

<script>
import eventBus from '../../plugins/event-bus';
export default {
  name: "odds",
  data() {
    return {
      isCollapsedCountries: [],
      odds: [
        { id: 1, name: "Home"},
        { id: 2, name: "Draw",},
        { id: 2, name: "Away",},
      ],
      collapses: [
        { id: 1, name: "Match Winner", },
      ],
    };
  },
  methods: {
    toggleCollapse(id) {
      const index = this.isCollapsedCountries.indexOf(id);
      if (index === -1) {
        this.isCollapsedCountries.push(id);
      } else {
        this.isCollapsedCountries.splice(index, 1);
      }
    },
    isCollapsed(id) {
      return this.isCollapsedCountries.includes(id);
    },
    cuponCard(param){
      this.$emit('cuponCard')
    },
  close(){
    eventBus.$emit("closeOdds");
  }
  },
}
</script>

<style scoped>

</style>
