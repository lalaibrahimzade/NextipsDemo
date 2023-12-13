import {mutate} from '~/lib/vuex-helpers/mutations'

export const state = () => ({
  coupons: [],


})

export const getters = {
  getCoupons: (s) => s.coupons,
  
}

export const mutations = {
  mutate: mutate(),

  setCoupon(state,payload){
    state.coupons.push(payload)
  },
}


export const actions = {
  async publishCoupon({commit, state}) {
    let {data} = await this.$axios.$get('/announcement-types');
    commit('mutate', {property: 'announcementTypes', value: data})
  },


  async login(){
    this.$auth.loginWith('local', {
      data: {
        email: payload.email,
        password: payload.password
      }
    }).then(() => {

      this.$router.push('/')
    }).catch(error => {

      console.error(error)
    })
  },
  async register({commit,state},payload){
    let {data} = await this.$axios.$post('/auth-user/register',payload)

  }
}
