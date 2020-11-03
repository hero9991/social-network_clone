const { default: Axios } = require("axios")

const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "226f16df-9137-4f6e-9e84-3e016b8869e6",
    },
})

export const getProfile = (userId) => instance.get(`profile/${userId}`)

export const getUsers = (numberOfUsers, pageNumber) => instance.get(`users?count=${numberOfUsers}&page=${pageNumber}`)
export const followUser = (userId) => instance.post(`follow/${userId}`)
export const unfollowUser = (userId) => instance.delete(`follow/${userId}`)
export const getStatus = (userId) => instance.get(`profile/status/${userId}`)
export const setStatus = (status) => instance.put(`profile/status`, {status})

export const setAuth = () => instance.get(`auth/me`)
