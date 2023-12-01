<template>
<div class="report">
     <input class="report-input" type="text" placeholder="Enter report">
     <div class="add-doc">
      <div class="add-sec">
        <div class="add-img">
          <img src="../../../assets/image/add-img.svg" alt="">
        </div>
        <div class="add-text">
          <h1>Attach image or doc.</h1>
          <p>.pdf, .png, .jpeg ..</p>
        </div>
      </div>
     </div>
     <div class="check-boxes">
      <div class="container-complain">
        <div class="round">
          <input type="checkbox"  id="checkbox-first" />
          <label for="checkbox-first"></label>
        </div>
        <label class="checkbox-label">This is a <strong>complain</strong></label>
      </div>
      <div class="container-suggestion">
        <div class="round">
          <input type="checkbox"  id="checkbox-second" />
          <label for="checkbox-second"></label>
        </div>
        <label class="checkbox-label">This is a <strong>suggestion</strong></label>
      </div>
     </div>
     <div class="send">Send</div>
</div>
</template>

<script>
export default {
  name: "reportSec"
}
</script>

<style scoped>

</style>
