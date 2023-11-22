<template>
    <div class="countries">
        <div class="sec-one">
            <h1>Countries/Leagues</h1>
        </div>
        <div class="sec-main">
            <div class="search-input">
                <form class="d-flex search" role="search">
                    <img src="../../assets/image/search.svg" alt="search button">
                     <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
                </form>
            </div>
            <div class="collapse-sec" v-for="(collapse, index) in collapses" :key="index">
                <div  @click="toggleCollapse(collapse.id)" class="country-sec"> 
                   <div class="country">
                    <img src="../../assets/image/france.svg" alt="" class="flag">
                    <h1>{{collapse.name }}</h1>
                   </div>
                    <div class="icon">
                        <img v-if="!isCollapsed(collapse.id)" src="../../assets/image/down-arrow.svg"/>
                        <img v-else src="../../assets/image/r-arrow.svg"/>
                    </div>
                </div>
                <ul :class="{ 'collapsed': isCollapsed(collapse.id) }">
                  <li v-for="lig in ligs" :key="lig.id">
                    <div class="ligs">
                        <div class="lig-icon">
                            <img src="../../assets/image/grand-est.svg" alt="lig icon">
                        </div>
                        <h1>{{ lig.name }}</h1>
                    </div>
                </li>
                </ul>
            </div>
        </div>
        <div class="sec-footer">
            <img src="../../assets/image/down-arrow.svg" alt="down arrow icon" class="arrow-icon">
        </div>
    </div>
</template>

<script>
export default {
  name: "countries",
  data() {
    return {
      isCollapsedCountries: [],
      ligs: [
        { id: 1, name: "Grand Est", icon: "../../assets/image/grand-est.svg" },
        { id: 2, name: "Occitanie", icon: "../../assets/image/grand-est.svg" },
        { id: 3, name: "Méditerranée", icon: "../../assets/image/grand-est.svg" },
      ],
      collapses: [
        { id: 1, name: "France", flag: "../../assets/image/az.svg" },
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
  },

}
</script>

<style scoped>

</style>
