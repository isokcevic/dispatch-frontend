import {Create, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

/** @todo use grid layout, more fields */
const EntryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="location" />
            <TextInput multiline source="description" />
            <TextInput source="contact_name" />
            <TextInput source="contact_phone" />
            <TextInput source="submitter_email" />
            <TextInput source="volunteer_assigned" />
        </SimpleForm>
    </Create>
);

export default EntryCreate;
