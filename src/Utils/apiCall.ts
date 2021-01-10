import Request from './request';

/*************** USER REQUESTS ***************/
export function getUserTrades(method: 'GET' | 'POST', body: object, cb: Function) {
    Request(`getUserTrades`, method, body, cb);
}
/*************** END USER REQUESTS ***************/

/*************** TICKER REQUESTS ***************/
export function getAssetPrice(method: 'GET' | 'POST', body: object, cb: Function) {
    Request(`ticker/getAssetPrice`, method, body, cb);
}
/*************** END TICKER REQUESTS ***************/
