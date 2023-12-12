
    <template>
    <div class="explore">
        <div class="section-up">
            <div class="user-icon">
              <img src="../../assets/image/avatar.svg" alt="avatar" />
            </div>
            <div class="user">
              <div class="name">Narmin Abbasli</div>
              <div class="user-name">@narminabbasli</div>
            </div>
            <button class="btn-follow">Follow</button>
          </div>
          <div class="league-card">
            <div v-for="(league, index) in leagues" :key="index" class="league" v-show="showLeagues || index < 2">
              <div class="league-header">
                <img
                  src="../../assets/image/lig-icon.svg"
                  alt="avatar"
                  class="lig-icon"
                />
                <div class="lig-name">Ukraine Premiere League</div>
              </div>
              <div class="league-main">
                <div class="teams">
                  <div class="team-sec">
                    <div class="team-icon">
                      <img
                        src="../../assets/image/dinamo-kiev.svg"
                        alt="team icon"
                        class="team-icon"
                      />
                    </div>
                    <div class="team-name">Dinamo Kiev</div>
                  </div>
                  <div class="line"></div>
                  <div class="team-sec">
                    <div class="team-icon">
                      <img
                        src="../../assets/image/dnipro.svg"
                        alt="team icon"
                        class="team-icon"
                      />
                    </div>
                    <div class="team-name">Dnipro-1 SK</div>
                  </div>
                </div>
                <div class="left-sec">
                  <div class="time-sec">
                    <div class="time">
                      <div class="time">21:00</div>
                      <div class="date">Dec 8</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="league-footer">
                <div class="goals">
                  <div class="goals-status-name">Goals Over/Under</div>
                  <div class="goals-status">Under 4.5</div>
                </div>
                <div class="odds-sec">
                  <div class="odds">Odds</div>
                  <div class="odds-score">1.44</div>
                </div>
              </div>
            </div>
            <div class="more-card" v-if="leagues.length > 2">
              <div class="coefficient">
                <div class="coefficient-text">Total coefficient:</div>
                <div class="coefficient-score">2.25</div>
              </div>
              <div class="toggle">
                <div class="card-amount">{{ showLeagues ? "less" : "more" }}</div>
                <div class="toggle-btn" @click="toggleLeagues">
                  <img
                    v-if="!showLeagues"
                    src="../../assets/image/down-arrow.svg"
                    alt="icon"
                    class="toggle-img"
                  />
                  <img
                    v-else
                    src="../../assets/image/up-icon.svg"
                    alt="icon"
                    class="toggle-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="section-down">
            <div class="icon">
              <i class="fa-regular fa-heart"></i>
              <span class="count">34</span>
            </div>
            <div class="icon">
              <i class="fa-regular fa-comment-dots"></i>
              <span class="count">4</span>
            </div>
            <div class="icon">
              <i class="fa-regular fa-bookmark"></i>
              <span class="count">9</span>
            </div>
            <div class="icon">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
        </div>
    </template>
    
    <script>
    export default {
      name: "explore",
      data() {
    return {
      showLeagues: true,
      leagues: [1,2,3],
    }
  },
  methods: {
    toggleLeagues() {
      this.showLeagues = !this.showLeagues; 
    },
  },
    }
    </script>
    
    <style scoped>
    
    </style>
    

