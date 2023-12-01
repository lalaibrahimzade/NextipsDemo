<template>
  <div>
    <auth v-if="authModalIsOpen" @close="authModalIsOpen = false" />
    <div class="sidebar">
      <nav class="sidebar-navigation">
        <ul>
          <li>
            <nuxt-link to="/">
              <a href="#">
                <img src="../assets/image/home.svg" alt="home-icon" />
                <span class="tooltip">Home</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/explore">
              <a href="#">
                <img src="../assets/image/explore.svg" alt="home-icon" />
                <span class="tooltip">Explore</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/notification">
              <a href="#">
                <img
                  src="../assets/image/notifications.svg"
                  alt="notification icon"
                />
                <span class="tooltip">Notifications</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <a href="#">
                <img src="../assets/image/save.svg" alt="save icon" />
                <span class="tooltip">Save</span>
              </a>
            </nuxt-link>
          </li>
          <li @click="addGameHandle(true)">
            <nuxt-link to="/live">
              <a href="#">
                <img src="../assets/image/live.svg" alt="live-icon" />
                <span class="tooltip">Live</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news">
              <a href="#">
                <img src="../assets/image/list.svg" alt="list-icon" />
                <span class="tooltip">News</span>
              </a>
            </nuxt-link>
          </li>
          <li @click="showSettingsItemMain(true)">
            <nuxt-link to="/settings/account">
              <a href="#">
                <i class="fa-solid fa-gear"></i>
                <span class="tooltip">Settings</span>
              </a>
            </nuxt-link>
          </li>
          <li @click="authModalHandle(true)">
            <a href="#">
              <img src="../assets/image/avatar.svg" alt="avatar" />
              <span class="tooltip">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="plus-div">
                <img src="../assets/image/plus.svg" alt="add icon" />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import auth from "./auth/auth";
import eventBus from "~/plugins/event-bus";
export default {
  name: "leftSidebar",
  components: { auth },
  data() {
    return {
      authModalIsOpen: false,
    };
  },
  methods: {
    authModalHandle(param) {
      this.authModalIsOpen = true;
      this.$emit("authModalOpenned");
    },
    addGameHandle() {
      eventBus.$emit("liveItemClick");
    },
    showSettingsItemMain() {
      eventBus.$emit("settingMain");
    },
  },
};
</script>

<style scoped></style>
