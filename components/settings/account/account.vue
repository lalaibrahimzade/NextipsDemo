<template>
    <div class="settings-sec">
      <mainSec
      v-if="viewedComponent === 'settingMain'"
      @settingMain="settingMain"
      @security="security"
    />
    <accountInfo v-else-if="viewedComponent === 'accountInfo'" />
    <security v-else-if="viewedComponent === 'security'"  @changePassword="changePassword"/>
    <ChangePassword v-else-if="viewedComponent === 'changePassword'"/>
    </div>
</template>

<script>
import eventBus from '../../../plugins/event-bus';
import mainSec from '../account/mainSec';
import accountInfo from '../account/accountInfo';
import security from '../account/security';
import ChangePassword from '../account/changePassword';
export default {
  name: "account",
  components: { mainSec, accountInfo, security, ChangePassword },
  data() {
    return {
      viewedComponent:'settingMain',
    }
  },
  methods: {
    showSettingsItemMain(param){
      this.viewedComponent="settingMain";
    },
    settingMain(){
      this.viewedComponent="accountInfo"
    },
    security(){
      this.viewedComponent="security"
    },
    changePassword(){
      this.viewedComponent="changePassword"
    }
  },
  created() {
    eventBus.$on('settingMain', () => {
      this.showSettingsItemMain(true);
    });
    
  }
}
</script>

<style scoped>

</style>
