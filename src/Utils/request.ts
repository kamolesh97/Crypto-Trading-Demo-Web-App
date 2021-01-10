import Axios from 'axios';

// HELPER IMPORT
import * as helper from '../Utils/helper';

export default async function request(
    url: string,
    method: 'GET' | 'POST',
    fields: object = {},
    cb: Function,
    headers: object = {},
    useApi: boolean = false,
    useCb: boolean = true,
) {
    let API_URL = helper.getApiUrl();
    let finalUrl = useApi ? url : API_URL + url;

    if (useCb) {
        Axios({method, url: finalUrl, data: fields, withCredentials: true, headers})
            .then(function (response) {
                return cb(null, response.data);
            })
            .catch(function (error) {
                console.log(error);
                if (error.response) {
                    return cb(error.response.status, error.response.data);
                } else if (error.request) {
                    return cb(600, 'Connection error');
                } else {
                    return cb(600, 'Connection error');
                }
            });
    } else {
        return await Axios({method: method, url: finalUrl, data: fields, withCredentials: true, headers: headers});
    }
}
