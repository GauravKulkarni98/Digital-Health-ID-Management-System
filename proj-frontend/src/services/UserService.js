import axios from "axios";
const BASE_URL = 'http://localhost:9090/';

class UserService {
    getAllUsers() {
        return axios.get(BASE_URL + "user")
    }

    addUser(user) {
        return axios.post(BASE_URL + "user", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getById(id) {
        return axios.get(BASE_URL + "user/" + id)
    }

    updateUser(user, userId) {
        return axios.put(BASE_URL + "user/" + userId, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    deleteUser(id) {
        return axios.delete(BASE_URL + "user/" + id);
    }


}

export default new UserService();
