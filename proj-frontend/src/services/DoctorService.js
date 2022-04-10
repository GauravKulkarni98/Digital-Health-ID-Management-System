import axios from "axios";
const BASE_URL = 'http://localhost:9090/';

class DoctorService {
    getAllDocs() {
        return axios.get(BASE_URL + "doctor");
    }

    addDoc(doc) {
        return axios.post(BASE_URL + "doctor", doc, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    getById(id) {
        return axios.get(BASE_URL + "doctor/" + id)
    }

    updateDoc(doc, docId) {
        return axios.put(BASE_URL + "doctor/" + docId, doc, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    deleteDoc(id) {
        return axios.delete(BASE_URL + "doctor/" + id);
    }

}

export default new DoctorService();
