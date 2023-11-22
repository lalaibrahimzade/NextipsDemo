export default function ({$axios, error}) {
  $axios.onError((axiosError) => {
    const code = parseInt(axiosError.response && axiosError.response.status)

    if (code === 422) {

      const errors = axiosError.response.data.errors
      console.error('Validation Errors:', errors)

    }

    if (code === 500) {

      console.error('Server Error:', axiosError.response.data.message)

    }

    if (code >= 400 && code < 500) {

      console.error('Client Error:', axiosError.response.data.message)

    }

    if (error) {
      error({
        statusCode: code,
        message: axiosError.message
      })
    }
  })
}
