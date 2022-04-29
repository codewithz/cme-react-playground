import axios from 'axios'

// axios.interceptors.response.use(whatDoToWhenSuccess,whatToDoWhenFailure)
axios.interceptors.response.use(null, (error) => {
    const expectedErrors = error.response &&
        error.response.status >= 400 &&
        error.response.status < 500

    if (!expectedErrors) {
        console.log("Logging the error:", error)
        alert("Something went wrong - Global!!")
    }

    return Promise.reject(error)
})


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}