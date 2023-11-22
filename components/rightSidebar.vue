<template>
<div class="right-sidebar">
    <div class="row gap-2">
      <div class="col">
        <Search/>
      </div>
      <div class="col">
        <Forecasters/>
      </div>
      <div class="col">
        <PopularUsers/>
      </div>
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