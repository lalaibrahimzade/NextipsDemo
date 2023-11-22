<template>
<div class="couponCard">
    <div class="league-couponCard">
        <div class="league-header">
            <img src="../../assets/image/lig-icon.svg" alt="avatar" class="lig-icon">
            <div class="lig-name">Ukraine Premiere League</div>
            <div class="close">X</div>
        </div>
        <div class="league-main">
            <div class="row">
                <div class="col-lg-4">
                    <div class="team">
                        <div class="team-icon">
                            <img src="../../assets/image/dinamo-kiev.svg" alt="team icon">
                        </div>
                        <div class="team-name">Dinamo Kiev</div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team">
                        <div class="time-icon">
                            -
                        </div>
                        <div class="time">
                            <div class="timer-icon">
                                
                            </div>
                            <p>Start 19:00</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team">
                        <div class="team-icon">
                            <img src="../../assets/image/dnipro.svg" alt="team icon">
                        </div>
                        <div class="team-name">Dnipro-1 SK</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="league-footer">
            <div class="score">
                <p>Both team to score</p>
                <p class="team-score">Yes</p>
            </div>
            <div class="score">
                <p>Odds</p>
                <p class="odd-score">2.55</p>
            </div>
        </div>
    </div>
    <div class="footer-cuponCard">
        <button class="post">Post</button>
        <button class="add-new">Add new</button>
    </div>
</div>
</template>

<script>
export default {
  name: "couponCard"
}
</script>

<style scoped>

</style>
