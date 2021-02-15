import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import strapiProvider from 'ra-strapi-rest';
import authProvider from "./authProvider";
import Cookies from "./helpers/Cookies";

import Entries from './resources/Entries';
import Coordinators from './resources/Coordinators';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = Cookies.getCookie('token')
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}


/** @todo load api url from config.. */
const dataProvider = strapiProvider(process.env.REACT_APP_API_URL, httpClient);

const App = () => (
    /** @TODO - CRITICAL - auth provider currently logs in to admin; implement proper roles then fix this */
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="entries" {...Entries} />
        <Resource name="coordinators" {...Coordinators} />
    </Admin>
)

export default App;
