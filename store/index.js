import Vue from 'vue'
export const mutations = {
  mutate(state, payload) {
    Vue.set(state[payload.module], payload.key, payload.value);
  }
}
