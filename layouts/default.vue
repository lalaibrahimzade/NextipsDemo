<template>
<div class="default" :class="authModalOpenned ? 'blur' : null">
  <HeaderSection/>
  <div class="container text-center">
      <div class="row">
        <div class="col">
         <LeftSidebar @authModalOpenned="authModalOpenned"/>
        </div>
        <div class="col">
          <Navbar></Navbar>
          <Nuxt/>
        </div>
        <div class="col">
          <RightSidebar></RightSidebar>
        </div>
      </div>

  </div>

  <FooterSection/>
</div>
</template>

<script>
import HeaderSection from "./header-section";
import FooterSection from "./footer-section";
import Navbar from '../components/navbar';
import LeftSidebar from '../components/leftSidebar';
import RightSidebar from '../components/rightSidebar';

export default {
  name: "default",
  components: {FooterSection, HeaderSection, Navbar, LeftSidebar, RightSidebar},
data(){
  return{
    authModalIsOpen:false,
  }
},
  methods: {
    authModalOpenned(){
      this.authModalOpenned=true
    },

  },
}
</script>

<style scoped>


</style>
