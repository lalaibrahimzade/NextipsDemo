<template>
  <div class="notification">
    <div class="date-notification">
      <div class="date">
        <p>Today</p>
      </div>
      <div class="card-notification-follow">
        <div class="follow-notification">
          <div class="user-notification">
            <div class="avatar">
              <img src="../../assets/image/avatar.svg" alt="avatar" />
            </div>
            <div class="text-notification">
              <div class="user-name">Fuad Ismikhanli started following you</div>
              <div class="time-info">29 Aug 2021</div>
            </div>
          </div>
          <div class="btn-followback">Follow back</div>
        </div>
      </div>
      <div class="card-notification-commented">
        <div class="comment-notification">
          <div class="user-notification">
            <div class="avatar">
              <img src="../../assets/image/avatar.svg" alt="avatar" />
            </div>
            <div class="text-notification">
              <div class="user-name">Narmin Abbasli commented on your post:</div>
              <div class="comment">“Amazing forecast!”</div>
              <div class="time-info">29 Aug 2021</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-notification-liked">
        <div class="liked-notification">
          <div class="user-notification">
            <div class="avatar">
              <img src="../../assets/image/avatar.svg" alt="avatar" />
            </div>
            <div class="text-notification">
              <div class="user-name">Narmin Abbasli, Fuad Ismikhanli and 3 others liked your forecast</div>
              <div class="time-info">29 Aug 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notification",
};
</script>

<style scoped></style>
