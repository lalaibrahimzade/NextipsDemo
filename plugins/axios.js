export default ({$axios, redirect, app}, inject) => {



  $axios.onError((error) => {
    if (error.response.status == 422) {
      app.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]])
    }


    throw error
  })


}
