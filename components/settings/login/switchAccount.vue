<template>
    <div class="switch-account">
        <div class="switch-account-main">
            <div class="switch-account-items">
              <div class="avatar">
                <img src="../../../assets/image/avatar.svg" alt="icon">
              </div>
              <nuxt-link to="/settings/login/Swicth-account">
              <a>Narmin Abbasli</a>
             </nuxt-link>
            </div>
            <div class="switch-account-items">
                <div class="avatar">
                    <img src="../../../assets/image/avatar.svg" alt="icon">
                  </div>
                <nuxt-link to="/settings/login/Swicth-account">
                <a>Orkhan Anvarli</a>
               </nuxt-link>
              </div>
            <div class="switch-account-items">
              <img src="../../../assets/image/log-out.svg" alt="icon">
              <nuxt-link to="/settings/company/Log-out">
              <a>Add other account</a>
            </nuxt-link>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
  name: "switchAccount",
}
</script>

<style scoped>

</style>
