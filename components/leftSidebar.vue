<template>
  <div>
    <auth v-if="authModalIsOpen" @close="authModalClose()"/>
    <div class="sidebar">
      <nav class="sidebar-navigation">
        <ul class="nav-list">
          <li>
            <nuxt-link to="/">
              <a href="#">
                <div class="nav-content">
                  <div class="icon">
                    <img src="../assets/image/home.svg" alt="home-icon" />
                  </div>
                  <p class="nav-item-name">Home</p>
                </div>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/explore">
              <a href="#">
                <div class="nav-content">
                  <div class="icon">
                    <img src="../assets/image/explore.svg" alt="home-icon" />
                  </div>
                  <p class="nav-item-name">Explore</p>
                </div>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/notification">
              <a href="#">
                <div class="nav-content">
                  <div class="icon">
                    <img
                      src="../assets/image/notifications.svg"
                      alt="notification icon"
                    />
                  </div>
                  <p class="nav-item-name">Notifications</p>
                </div>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/save">
              <a href="#">
                <div class="nav-content">
                  <div class="icon">
                    <img src="../assets/image/save.svg" alt="save icon" />
                  </div>
                  <p class="nav-item-name">Save</p>
                </div>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/live">
              <a href="#">
                <div class="nav-content">
                  <div class="icon">
                    <img src="../assets/image/live.svg" alt="live-icon" />
                  </div>
                  <p class="nav-item-name">Live</p>
                </div>
              </a>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news">
              <a href="#">
                <div class="nav-content">
                  <div class="icon">
                    <img src="../assets/image/list.svg" alt="list-icon" />
                  </div>
                  <p class="nav-item-name">News</p>
                </div>
              </a>
            </nuxt-link>
          </li>

          <li v-if="$auth.user" >
            <Nuxt-link to="/profile">
            <a href="#">
              <div class="nav-content">
                <div class="icon">
                  <img src="../assets/image/avatar.svg" alt="avatar" />
                </div>
                <p class="nav-item-name">Profile</p>
              </div>
            </a>
            </Nuxt-link>
          </li>


          <li v-else @click="authModalHandle(true)" >

              <a href="#">
                <div class="nav-content">
                  <div class="icon">
                    <img src="../assets/image/avatar.svg" alt="avatar" />
                  </div>
                  <p class="nav-item-name">Sign in</p>
                </div>
              </a>

          </li>

          <li @click="addGameHandle(true)">
            <nuxt-link to="/addCoupon">
              <a href="#">
                  <div class="plus-div">
                    Add
                  </div>
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
