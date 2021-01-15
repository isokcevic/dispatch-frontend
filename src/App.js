import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { AidRequestsCreate, AidRequestEdit, AidRequestsList } from './aid-requests'
import strapiProvider from 'ra-strapi-rest';

const dataProvider = strapiProvider('http://localhost:1337');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="aid-requests" list={AidRequestsList} edit={AidRequestEdit} create={AidRequestsCreate} />
    </Admin>
)

export default App;
