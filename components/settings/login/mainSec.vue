<template>
   <div>
    <ModalLogout v-if="modalIsOpen" @close="modalIsOpen=false"/>
    <div class="login-setting">
        <div class="login-main">
            <div class="login-items">
              <img src="../../../assets/image/persons-icon.svg" alt="icon">
              <nuxt-link to="/settings/login/switch-account">
              <a>Switch account</a>
             </nuxt-link>
            </div>
            <div class="login-items" @click="modalHandle(true)">
              <img src="../../../assets/image/log-out.svg" alt="icon">
              <nuxt-link to="">
              <a>Log out</a>
            </nuxt-link>
            </div>
        </div>    
    </div>
   </div>
</template>

<script>
import ModalLogout from './modalLogout';

export default {
    name: "mainSec",
    components: { ModalLogout },
    data() {
        return {
            modalIsOpen: false,
        };
    },
    methods: {
        modalHandle(param) {
            this.modalIsOpen = true;
            this.$emit('modalOpenned');
        },
    },
    
}
</script>

<style scoped>

</style>
