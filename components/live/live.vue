<template>
  <div class="live">
    <div class="live-left-side col-md-4 col-6">
        <div>
            <countriesLive />
          </div>
          <div>
              <leaugesLive/>
          </div>
    </div>
    <div class="col-md-8 col-6">
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
