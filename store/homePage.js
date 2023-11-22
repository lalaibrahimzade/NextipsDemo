import {mutate} from '~/lib/vuex-helpers/mutations'

export const state = () => ({
  announcements: [],
})

export const getters = {
  getAnnouncements: (s) => s.announcements,
}

export const mutations = {
  mutate: mutate(),
}


export const actions = {
  async homePageData({commit, state}) {
    let data = await this.$axios.$get('/home-page');
    commit('mutate', {property: 'announcements', value: data.announcements})
  },
  async search({commit},payload){

    let {data}= await this.$axios.$post('/search',payload)

    commit('mutate', {property: 'announcements', value: data})
  }



}
