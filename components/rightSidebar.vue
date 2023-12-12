<template>
<div class="right-sidebar">
      <div >
        <Search/>
      </div>
      <div >
        <Forecasters/>
      </div>
      <div >
        <PopularUsers/>
      </div>
</div>

</template>

<script>
import Search from "./search";
import PopularUsers from "./popularUsers";
import Forecasters from "./forecasters"

export default {
  name: "rightSidebar",
  components: { Search, PopularUsers}
}
</script>

<style scoped>

</style>