const {REACT_APP_ENVIRONMENT, REACT_APP_DEV_API_URL, REACT_APP_PROD_API_URL} = process.env;

// TYPE DEF
type formattedTimeStamp = {
    YYYY: number;
    MM: number;
    MMM: string;
    DD: number;
    hh: number;
    mm: number;
    ss: number;
    ampm: string;
};

const formatTimeStamp = (timeStamp: Date | string): formattedTimeStamp => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateTime = new Date(timeStamp);
    let YYYY = dateTime.getFullYear();
    let MM = dateTime.getMonth() + 1;
    let DD = dateTime.getDate();
    let hh = dateTime.getHours();
    let mm = dateTime.getMinutes();
    let ss = dateTime.getSeconds();
    let ampm = hh >= 12 ? 'pm' : 'am';
    return {
        YYYY,
        MM,
        MMM: months[dateTime.getMonth()],
        DD,
        hh,
        mm,
        ss,
        ampm,
    };
};

const numberWithCommas = (x: string): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const arrAllValChecker = (arr: boolean[], toCheck: boolean): boolean => arr.every((v: boolean): boolean => v === toCheck);

const getApiUrl = (): string => {
    if (REACT_APP_ENVIRONMENT == 'production') {
        return REACT_APP_PROD_API_URL || '';
    } else {
        return REACT_APP_DEV_API_URL || '';
    }
};

export {formatTimeStamp, numberWithCommas, arrAllValChecker, getApiUrl};
