import {mutate} from '~/lib/vuex-helpers/mutations'

export const state = () => ({
  announcement: [],
})

export const getters = {
  getAnnouncement: (s) => s.announcement,
}

export const mutations = {
  mutate: mutate(),
}

export const actions = {
  async announcement({commit, state},id) {
    let {data} = await this.$axios.$get('/announcement/detail/'+id);
    commit('mutate', {property: 'announcement', value: data})

  },

}
