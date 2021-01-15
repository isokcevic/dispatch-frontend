import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import AidRequests from './AidRequests'
import strapiProvider from 'ra-strapi-rest';

const dataProvider = strapiProvider('http://localhost:1337');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="aid-requests" {...AidRequests} />
    </Admin>
)

export default App;
