<template>
 <div>
  <div class="default" :class="{ 'blur': authModalIsOpen}">
    <div class="overlay" v-if="authModalIsClosed"></div>
    <HeaderSection />
    <div class="container">
      <div class="row">
        <div class="col-2">
          <LeftSidebar @authModalOpenned="authModalOpenned" @authModalIsClosed="authModalIsClosed"/>
        </div>
        <div class="col-6">
          <Navbar />
          <Nuxt />
        </div>
        <div class="col-4">
          <RightSidebar />
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
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
  components: { FooterSection, HeaderSection, Navbar, LeftSidebar, RightSidebar},
  data() {
    return {
      authModalIsOpen: false,
    };
  },
  methods: {
    authModalOpenned() {
      this.authModalIsOpen = true;
      console.log(this.authModalIsOpen);
    },
    authModalIsClosed(){
      this.authModalIsOpen = false;
      console.log(this.authModalIsOpen);
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgb(128, 128, 128, 0.6) ;
  z-index: 1000;
  display: none;

}



.blur {
  background-color: rgba(26, 28, 33, 1);
}

.default {
  background-color: rgba(26, 28, 33, 1);
}
.blur .overlay {
  display: block;
}
</style>
