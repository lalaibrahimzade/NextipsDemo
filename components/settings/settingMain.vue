<template>
    <div>
        <div class="settings-item-main">
            <div class="settings-items" @click="settingMain()">
              <img src="../../assets/image/settings-avatar.svg" alt="avatar icon">
              <p>Account information</p>
            </div>
            <div class="settings-items" @click="security()">
              <img src="../../assets/image/security-icon.svg" alt="avatar icon">
              <p>Security and login</p>
            </div>
            <div class="settings-items">
              <img src="../../assets/image/share-icon.svg" alt="avatar icon">
              <p>Share profile</p>
            </div>
            <div class="settings-items">
              <img src="../../assets/image/insight-icon.svg" alt="avatar icon">
              <p>Insights</p>
            </div>
           </div>
    </div>
</template>

<script>
export default {
  name: "settingMain",
  props: ['mainItem'],
  methods: {
    settingMain(param){
          this.$emit('settingMain')
    },
    security(){
      this.$emit('security')
    }
  },
}
</script>

<style scoped>

</style>
