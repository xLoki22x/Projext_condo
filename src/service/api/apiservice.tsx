import axios from 'axios';


//API
const API_URL = 'https://localhost:5500';

class ApiService {

    GetModel() {
        return axios.get(API_URL + '/api/model/GetModeul',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(data => data.data)
    }

    datediff() {
        return axios.get(API_URL + '/api/Issue/get_datediff',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(data => data.data)
    }

    async Getissue_byid_status(id: any) {

        return axios.post(API_URL + '/api/Home/Getissue_byid_status', [{ id }], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
            .then(data => data.data)
    }


    async Getissue_by_search(text: any, type: any, userid: any) {
        console.log(text + ' ' + type + ' ' + userid);

        return axios.post(API_URL + '/api/Home/issue_by_search', [{ text, type, userid }], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
            .then(data => data.data)
    }


}


export default new ApiService();