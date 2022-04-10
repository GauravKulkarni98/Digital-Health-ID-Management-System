import axios from "axios";
const BASE_URL = 'http://localhost:9090/';

class HospitalService {
    getAllHosp() {
        return axios.get(BASE_URL + "hospital");
    }

    createHospital(hosp) {
        return axios.post(BASE_URL + "hospital", hosp, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getById(id) {
        return axios.get(BASE_URL + "hospital/" + id)
    }

    updateHospital(hosp,hospId) {
        return axios.put(BASE_URL + "hospital/" + hospId, hosp, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    deleteHospital(id) {
        return axios.delete(BASE_URL + "hospital/" + id);
    }

    // commonLogin(user){
    //     return axios.put(base_url+"/common/signin"+user.userName,user.password,{
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     });
    // }


}

export default new HospitalService();
