<template>
  <div class="live">
    <div class="live-left-side">
        <div>
            <countriesLive />
          </div>
          <div>
              <leaugesLive/>
          </div>
    </div>
    <div>
        <liveLeauges @toggle-alarm="handleToggleAlarm"/>
    </div>
  </div>
</template>
<script>
import countriesLive from "./countriesLive";
import leaugesLive from "./leaugesLive";
import liveLeauges from "./liveLeauges"
export default {
  name: "live",
  components: { countriesLive, leaugesLive, liveLeauges },
  methods: {
    handleToggleAlarm(index) {
      console.log(`${index}`);
    },
  }
};
</script>
