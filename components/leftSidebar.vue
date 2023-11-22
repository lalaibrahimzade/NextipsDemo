<template>
<div>
    <auth v-if="authModalIsOpen" @close="authModalIsOpen=false"/>
    <div class="sidebar">
        <nav class="sidebar-navigation">
            <ul>
                <li >
                    <nuxt-link to="/">
                    <a href="#">
                        <img src="../assets/image/home.svg" alt="home-icon">
                        <span class="tooltip">Home</span>
                    </a>
                </nuxt-link>
                </li>
                <li >
                    <a href="#">
                        <img src="../assets/image/explore.svg" alt="home-icon">
                        <span class="tooltip">Explore</span>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <img src="../assets/image/notifications.svg" alt="home-icon">
                        <span class="tooltip">Notifications</span>
                    </a>
                </li>
                <li >
                   <a href="#">
                    <img src="../assets/image/save.svg" alt="home-icon">
                    <span class="tooltip">Save</span>
                   </a>
                </li>
                <li>
                    <nuxt-link to="/live" >
                        <a href="#">
                            <img src="../assets/image/live.svg" alt="live-icon">
                            <span class="tooltip">Live</span>
                        </a>
                    </nuxt-link>
                </li>
                <li >
                    <a href="#">
                        <img src="../assets/image/list.svg" alt="list-icon">
                        <span class="tooltip">News</span>
                    </a>
                </li>
                <li @click="authModalHandle(true)">
                    <a href="#">
                        <img src="../assets/image/avatar.svg" alt="avatar">
                        <span class="tooltip">Home</span>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <div class="plus-div">
                            <img src="../assets/image/plus.svg" alt="home-icon">
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

   
</template>

<script>
import auth from './auth/auth';
export default {
  name: "leftSidebar",
  components:{auth},
  data(){
    return{
        authModalIsOpen:false,
    }
  },
  methods:{

    authModalHandle(param){
        this.authModalIsOpen=true
        this.$emit('authModalOpenned')
    },


  }
}
</script>

<style scoped>
 
</style>
