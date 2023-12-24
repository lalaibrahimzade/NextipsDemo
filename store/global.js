import { mutate } from "~/lib/vuex-helpers/mutations";

export const state = () => ({
  coupons: [],
});

export const getters = {
  getCoupons: (s) => s.coupons,
};

export const mutations = {
  mutate: mutate(),
  UPDATE_COUPON_ITEMS(state, payload) {
    state.coupons.push(payload);
    console.log(state.coupons);
  },

  REMOVE_COUPON_ITEM(state, index) {
    state.coupons.splice(index, 1);
  },
};

export const actions = {



  async login() {
    this.$auth
      .loginWith("local", {
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
      .then(() => {
        this.$router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async register({ commit, state }, payload) {
    let { data } = await this.$axios.$post("/auth-user/register", payload);
  },
};
