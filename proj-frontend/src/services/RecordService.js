import axios from "axios";
const BASE_URL = 'http://localhost:9090/';

class RecordService {
    getAllRecs() {
        return axios.get(BASE_URL + "record");
    }

    createRecord(rec) {
        return axios.post(BASE_URL + "record", rec, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getById(id) {
        return axios.get(BASE_URL + "record/" + id)
    }

    updateRecord(rec, recId) {
        return axios.put(BASE_URL + "record/" + recId, rec, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    deleteRecord(id) {
        return axios.delete(BASE_URL + "record/" + id);
    }

    getRecordByUserId(id){
        return axios.get(BASE_URL+"record/user/"+id);

    }

}

export default new RecordService();
