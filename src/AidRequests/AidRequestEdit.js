import {Edit, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

const AidRequestEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="location" />
            <TextInput multiline source="description" />
            <TextInput source="contact_name" />
            <TextInput source="contact_phone" />
            <TextInput source="volunteer_assigned" />
        </SimpleForm>
    </Edit>
);

export default AidRequestEdit;