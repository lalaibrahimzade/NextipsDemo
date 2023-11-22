import Vue from 'vue';
export const mutate = () => {
  return (state, payload) => {
    if (payload.key !== undefined) {
      if (payload.param !== undefined) {
        Vue.set(state[payload.property][payload.key], payload.param, payload.value);
      } else {
        Vue.set(state[payload.property], payload.key, payload.value);
      }
    } else {
      Vue.set(state, payload.property, payload.value);
    }
  }
};
