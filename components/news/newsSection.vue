<template>
  <div class="news">
    <div class="main-news">
        <div class="main-img-sec">
            <img src="../../assets/image/news-1.svg" alt="" class="main-image">
        </div>
        <div class="main-text">
            <div class="text-head">
                <p>The Verdict: Rob Page's best result for Wales?</p>
            </div>
            <div class="news-paragraf">
                <p>When the Chelsea players' names were read by the announcer at Kingsmeadow on Saturday evening, there was one corresponding cheer that was louder than the rest. Mille Bright's name went down well, as did Niamh Charles...</p>
            </div>
        </div>
    </div>
    <div class="other-news">
        <div class="news-row" v-for="news in data">
                <div class="news-sec">
                    <div class="news-img">
                        <img src="../../assets/image/news-2.png" alt="">
                    </div>
                    <div class="news-text">
                        <p>The Verdict: Rob Page's best result for Wales?</p>
                    </div>
                </div>
                <div class="news-sec">
                    <div class="news-img">
                        <img src="../../assets/image/news-3.png" alt="">
                    </div>
                    <div class="news-text">
                        <p>The Verdict: Rob Page's best result for Wales?</p>
                    </div>
                </div>
                <div class="news-sec">
                    <div class="news-img">
                        <img src="../../assets/image/news-4.png" alt="">
                    </div>
                    <div class="news-text">
                        <p>The Verdict: Rob Page's best result for Wales?</p>
                    </div>
                </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newsSection",
  data() {
    return {
        data:[1,2,3]
    }
  },
};
</script>
