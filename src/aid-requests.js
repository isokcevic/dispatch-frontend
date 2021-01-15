import * as React from "react";
import {
    BooleanField,
    Create,
    Datagrid,
    DateField,
    Edit,
    FunctionField,
    List,
    Show,
    SimpleForm,
    TextField,
    TextInput,
} from 'react-admin';

import { Typography, Box, Toolbar } from '@material-ui/core';

import RichTextInput from 'ra-input-rich-text';


export const AidRequestsList = props => (
    <List {...props}>
        <Datagrid expand={AidPanel}>
            <TextField source="assigned_dispatcher" />
            <TextField source="status" />
            <DateField source="published_at" locales="hr-HR" showTime />
            <BooleanField source="fulfilled" />
            <TextField source="location" />
            <FunctionField label="Coordinates" render={r => `${r.locationLat} ${r.locationLon}`} />
            <TextField source="contact_name" />
            <TextField source="contact_phone" />
            <TextField source="description" />
            <TextField source="volunteer_assigned" />
            <TextField source="comments" />
        </Datagrid>
    </List>
);

export const AidPanel = props => (
    <Edit {...props} title="">
        <SimpleForm>
            <TextInput source="location" />
            <TextInput source="contact_name" />
            <TextInput source="contact_phone" />
            <RichTextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const AidRequestsCreate = props => (
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

export const AidRequestEdit = props => (
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