export const parseJwt = () => {
    let token = getToken();
    if (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    return '';
};

export const setToken = token => {
    window.localStorage.setItem('userAuthToken', token);
};
export const removeToken = () => {
    window.localStorage.removeItem('userAuthToken');
};
export const getToken = () => {
    let obj = window.localStorage.getItem('userAuthToken');
    return obj;
};

export const isTokenExpired = () => {
    var token = getToken();
    if (token) {
        let user = parseJwt();
        var cur_time = new Date().getTime() / 1000;
        if (user && user.exp && cur_time < user.exp) {
            return false;
        }
        return true;
    } else {
        return true;
    }
};