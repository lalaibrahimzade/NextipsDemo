<template>
<div class="setting-modal">
    <div class="setting-modal-header">
        <div class="close" @click="$emit('close')">x</div>
    </div>
    <div class="setting-modal-main" v-if="step == 1">
        <p>Are you sure deactive your account?</p>
        <div class="setting-buttons">
            <div class="modal-btn" @click="nextModal()">Yes</div>
            <div class="modal-btn">No</div>
        </div>
    </div>
     <div class="add-password-sec" v-if="step == 2">
        <p>Add password to confirm</p>
        <div class="pass-input">
            <img src="../../../assets/image/lock.svg" alt="lock icon" class="lock" />
            <input
              :type="yourPasswordVisible ? 'text' : 'password'"
              class="password"
              placeholder="Your password"
            />
            <div @click="yourPasswordVisible = !yourPasswordVisible">
              <i
                class="eye-icon"
                :class="
                yourPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'
                "
              ></i>
            </div>
          </div>
          <button class="deactive-btn" @click="nextModal()">Deactive</button>
     </div>
     
</div>
</template>

<script>
export default {
  name: "settingModal",
  data() {
    return {
        step: 1,
        yourPasswordVisible: false,
    }
  },
  methods: {
    nextModal() {
      this.step++;
    },
  },
}
</script>

<style scoped>

</style>
