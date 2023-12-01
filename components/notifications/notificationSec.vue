<template>
  <div class="notification-section">
    <notification v-for="notification in notifications"/>
  </div>
</template>

<script>
import notification from './notification';
export default {
  name: "notificationSec",
  components:{notification},
  data(){
    return{
      notifications:[1,2,3,4,5]
    }
  }
};
</script>

<style scoped></style>
