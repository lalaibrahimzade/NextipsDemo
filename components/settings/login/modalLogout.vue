<template>
    <div class="setting-modal">
        <div class="setting-modal-header">
            <div class="close" @click="$emit('close')">x</div>
        </div>
        <div class="setting-modal-main">
            <p>Are you sure log out?</p>
            <div class="setting-buttons">
                <div class="modal-btn">Yes</div>
                <div class="modal-btn">No</div>
            </div>
        </div> 
    </div>
    </template>
    
    <script>
    export default {
      name: "modalLogout",
      data() {
        return {
            step: 1,
            yourPasswordVisible: false,
        }
      },
      methods: {
        nextModal() {
          this.step++;
        },
      },
    }
    </script>
    
    <style scoped>
    
    </style>
    