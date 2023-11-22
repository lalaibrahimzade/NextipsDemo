import {mutate} from '~/lib/vuex-helpers/mutations'

export const state = () => ({
  announcementTypes: [],
  propertyTypes: [],
  apartmentTypes: [],
  cities: [],
  regions:[],
  villages:[],
  metro_stations:[],
  clientTypesForRent:[],
  searchLocations:[]

})

export const getters = {
  getAnnouncementTypes: (s) => s.announcementTypes,
  getPropertyTypes: (s) => s.propertyTypes,
  getApartmentTypes: (s) => s.apartmentTypes,
  getCities: (s) => s.cities,
  getRegions: (s) => s.regions,
  getVillages: (s) => s.villages,
  getMetroStations: (s) => s.metro_stations,
  getClientTypeForRent:(s) => s.clientTypesForRent,
  getSearchLocations:(s)=>s.searchLocations,
}

export const mutations = {
  mutate: mutate(),

  setVillages(state,payload){
    state.villages=payload
  },
  setMetroStations(state,payload){
    state.metro_stations=payload
  }
}


export const actions = {
  async announcementTypes({commit, state}) {
    let {data} = await this.$axios.$get('/announcement-types');
    commit('mutate', {property: 'announcementTypes', value: data})
  },
  async propertyTypes({commit, state}) {
    let {data} = await this.$axios.$get('/property-types');
    commit('mutate', {property: 'propertyTypes', value: data})
  },
  async apartmentTypes({commit, state}) {
    let {data} = await this.$axios.$get('/apartment-types');
    commit('mutate', {property: 'apartmentTypes', value: data})
  },
  async cities({commit, state}) {
    let {data} = await this.$axios.$get('/cities');
    commit('mutate', {property: 'cities', value: data})
    commit('setMetroStations',[])
  },
  async regions({commit,state},payload){
    let {data}=await this.$axios.$get('/regions/'+payload.id);

    commit('mutate', {property: 'regions', value: data})
    commit('setVillages',[])
    commit('setMetroStations',[])
  },
  async villages({commit,state},payload){
    let {data}=await this.$axios.$get('/villages/'+payload.id);
    console.log(data)
    commit('setVillages',data)
  },
  async metroStations({commit,state}){
    let {data}=await this.$axios.$get('/metro-stations');
    commit('setMetroStations',data)
  },
  async clientTypesForRent({commit,state}){
    let {data}=await  this.$axios.$get('/client-types-for-rent');
    commit('mutate', {property: 'clientTypesForRent', value: data})
  },

  async getSearchLocations({commit,state}){
    let {data} = await this.$axios.get('/search-locations');
    commit('mutate',{property:'searchLocations',value:data.data})
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
