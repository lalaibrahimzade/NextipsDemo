<template>
  <div class="profile">
    <div class="profile-head">
      <div class="user-info">
        <div class="user">
          <div class="user-avatar">
            <img
              src="../../assets/image/avatar.svg"
              alt="avatar"
              class="avatar"
            />
          </div>
          <div class="user-name-info">
            <div class="user-fullname">Narmin Abbasli</div>
            <div class="user-name">@narminabbasli</div>
          </div>
        </div>
        <div class="user-settings">
          <div class="edit setting-sec-icon" @click="showSettingsItemMain(true)">
            <nuxt-link to="">
              <a href="#">
                <i class="fa-solid fa-pen"></i>
              </a>
            </nuxt-link>
          </div>
          <div class="settings setting-sec-icon" @click="showSettingsItemMain(true)">
            <nuxt-link to="/settings/account">
              <a href="#">
                <i class="fa-solid fa-gear"></i>
              </a>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="user-profile-btns">
        <div class="following btn-user">4 Following</div>
        <div class="followers btn-user">12 Followers</div>
        <div class="coupons-user btn-user">25 Coupons</div>
      </div>
    </div>
    <div class="profile-info">
      <div class="posts profile-info-sec">Posts</div>
      <div class="likes profile-info-sec">Likes</div>
      <div class="goals profile-info-sec">Goals</div>
    </div>
  </div>
</template>
<script>
import eventBus from "~/plugins/event-bus";
export default{
  name:"profile",
  methods: {
    showSettingsItemMain() {
      eventBus.$emit("settingMain");
    },
  },
}
</script>
