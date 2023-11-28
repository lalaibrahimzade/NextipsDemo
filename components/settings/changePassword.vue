<template>
  <div>
    <SettingModal v-if="settingModalIsOpen" @close="settingModalIsOpen=false"/>
    <div class="change-password">
      <div class="pass-input">
        <img src="../../assets/image/lock.svg" alt="lock icon" class="lock" />
        <input
          :type="oldPasswordVisible ? 'text' : 'password'"
          class="password"
          placeholder="Old password"
        />
        <div @click="oldPasswordVisible = !oldPasswordVisible">
          <i
            class="eye-icon"
            :class="oldPasswordVisible ? 'fas fa-eye-slash ' : 'fas fa-eye'"
          ></i>
        </div>
      </div>
      <div class="pass-input">
        <img src="../../assets/image/lock.svg" alt="lock icon" class="lock" />
        <input
          :type="newPasswordVisible ? 'text' : 'password'"
          class="password"
          placeholder="New password"
        />
        <div @click="newPasswordVisible = !newPasswordVisible">
          <i
            class="eye-icon"
            :class="newPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"
          ></i>
        </div>
      </div>
      <div class="pass-input">
        <img src="../../assets/image/lock.svg" alt="lock icon" class="lock" />
        <input
          :type="repeatNewPasswordVisible ? 'text' : 'password'"
          class="password"
          placeholder="Repeat password"
        />
        <div @click="repeatNewPasswordVisible = !repeatNewPasswordVisible">
          <i
            class="eye-icon"
            :class="
              repeatNewPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'
            "
          ></i>
        </div>
      </div>
      <button class="save-btn" @click="settingModalHandle(true)">Save</button>
    </div>
  </div>
</template>

<script>
import SettingModal from "./settingModal";

export default {
  name: "changePassword",
  components: { SettingModal },
  data() {
    return {
      settingModalIsOpen: false,
      oldPasswordVisible: false,
      newPasswordVisible: false,
      repeatNewPasswordVisible: false,
    };
  },
  methods: {
    settingModalHandle(param){
        this.settingModalIsOpen=true
        this.$emit('settingModalOpenned')
    },
  },
};
</script>

<style scoped></style>
