<template>
    <div class="settings-sec">
      <settingMain
      :mainItem="mainItem"
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
import eventBus from '../../plugins/event-bus';
import settingMain from '../settings/settingMain';
import accountInfo from '../settings/accountInfo';
import security from '../settings/security';
import ChangePassword from './changePassword';
export default {
  name: "settings",
  components: { settingMain, accountInfo, security, ChangePassword },
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
