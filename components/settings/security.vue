<template>
   <div>
    <div class="security" @click="changePassword()">
      <img src="../../assets/image/lock.svg" alt="avatar icon">
      <p>Change password</p>
    </div>
    <div class="security verification">
      <img src="../../assets/image/protect-icon.svg" alt="avatar icon">
      <p>Two step verification</p>
     <div class="toggle-btn">
      <input type="checkbox" id="switch" /><label for="switch"></label>
     </div>
    </div>
    <div class="security">
      <img src="../../assets/image/deactive-icon.svg" alt="avatar icon">
      <p>Deactivate your account</p>
    </div>
    <div class="security">
      <img src="../../assets/image/trashbin-icon.svg" alt="avatar icon">
      <p>Delete your account</p>
    </div>
   </div>
</template>

<script>
export default {
  name: "security",
  methods: {
    changePassword(param){
          this.$emit('changePassword')
        },
  },
}
</script>

<style scoped>

</style>
