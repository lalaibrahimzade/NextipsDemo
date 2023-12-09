<template>
  <div>
    <auth v-if="authModalIsOpen" @close="authModalClose()"/>
    <div class="sidebar">
      <nav class="sidebar-navigation">
        <ul>
          <li>
            <nuxt-link to="/">
              <a href="#">
                <div class="icon">
                  <img src="../assets/image/home.svg" alt="home-icon" />
                </div>
                <span class="tooltip">Home</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/explore">
              <a href="#">
                <div class="icon">
                  <img src="../assets/image/explore.svg" alt="home-icon" />
                </div>
                <span class="tooltip">Explore</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/notification">
              <a href="#">
                <div class="icon">
                  <img
                    src="../assets/image/notifications.svg"
                    alt="notification icon"
                  />
                </div>
                <span class="tooltip">Notifications</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/save">
              <a href="#">
                <div class="icon">
                  <img src="../assets/image/save.svg" alt="save icon" />
                </div>
                <span class="tooltip">Save</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/live">
              <a href="#">
                <div class="icon">
                  <img src="../assets/image/live.svg" alt="live-icon" />
                </div>
                <span class="tooltip">Live</span>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news">
              <a href="#">
                <div class="icon">
                  <img src="../assets/image/list.svg" alt="list-icon" />
                </div>
                <span class="tooltip">News</span>
              </a>
            </nuxt-link>
          </li>
          <li @click="authModalHandle(true)">
            <a href="#">
              <div class="icon">
                <img src="../assets/image/avatar.svg" alt="avatar" />
              </div>
              <span class="tooltip">Profile</span>
            </a>
          </li>
          <li @click="addGameHandle(true)">
            <nuxt-link to="/addCoupon">
              <a href="#">
                <div class="plus-div">
                  <img src="../assets/image/plus.svg" alt="add icon" />
                </div>
                <span class="tooltip">Add</span>
              </a>
            </nuxt-link>
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
    authModalClose(param){
      this.authModalIsOpen = false;
      this.$emit("authModalIsClosed")
    },
    addGameHandle() {
      eventBus.$emit("liveItemClick");
    },
  },
};
</script>

<style scoped></style>
