import Cookies from './helpers/Cookies'

/** @todo DO NOT USE ADMIN */
const authProvider = {
    login: ({ username, password }) => {
        const email = username // strapi expects 'identifier' and not 'username'
        const request = new Request('http://localhost:1337/admin/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json'})
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                Cookies.setCookie('token', response.data.token, 1);
                Cookies.setCookie('role', response.data.user.roles[0].name, 1);
            });
    },

    logout: () => {
        Cookies.deleteCookie('token');
        Cookies.deleteCookie('role');
        return Promise.resolve();
    },

    checkAuth: () => {
        return Cookies.getCookie('token') ? Promise.resolve() : Promise.reject();
    },

    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            Cookies.deleteCookie('token');
            Cookies.deleteCookie('role');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        const role = Cookies.getCookie('role');
        return role ? Promise.resolve(role) : Promise.reject();
    },
}

export default authProvider;