<template>
   <div>
    <SettingModal v-if="settingModalIsOpen" @close="settingModalIsOpen=false"/>
    <div class="security" @click="changePassword()">
      <img src="../../../assets/image/lock.svg" alt="avatar icon">
      <p>Change password</p>
    </div>
    <div class="security verification">
      <img src="../../../assets/image/protect-icon.svg" alt="avatar icon">
      <p>Two step verification</p>
     <div class="toggle-btn">
      <input type="checkbox" id="switch" /><label for="switch"></label>
     </div>
    </div>
    <div class="security" @click="settingModalHandle(true)">
      <img src="../../../assets/image/deactive-icon.svg" alt="avatar icon">
      <p>Deactivate your account</p>
    </div>
    <div class="security">
      <img src="../../../assets/image/trashbin-icon.svg" alt="avatar icon">
      <p>Delete your account</p>
    </div>
   </div>
</template>

<script>
import SettingModal from "./settingModal";
export default {
  name: "security",
  components: { SettingModal },
  data() {
    return {
      settingModalIsOpen: false,
    }
  },
  methods: {
    changePassword(param){
          this.$emit('changePassword')
        },
        settingModalHandle(param){
        this.settingModalIsOpen=true
        this.$emit('settingModalOpenned')
    },
  },
}
</script>

<style scoped>

</style>
