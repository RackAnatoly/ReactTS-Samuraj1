import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "6c9ada99-ecd2-401f-9bb3-7081b3d8bee6"
    }
})
export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUsers(id: number) {
        return instance.delete(`follow/${id}`)
    },
    unUnfollowUsers(id: number) {
        return instance.post(`follow/${id}`)
    }
}
// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(res => res.data)
// }
//
// export const followUsers = (id: number) => {
//     return instance.delete(`follow/${id}`)
// }
// export const unUnfollowUsers = (id: number) => {
//     return instance.post(`follow/${id}`)
// }