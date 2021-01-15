import * as React from "react";
import {
    BooleanField,
    Datagrid,
    DateField,
    Edit,
    Filter,
    FunctionField,
    List,
    SimpleForm,
    TextField,
    TextInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { Typography, Box, Toolbar } from '@material-ui/core';

const AidRequestList = props => (
    <List {...props} filters={<AidRequestFilter />} >
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

const AidRequestFilter = (props) => (
    <Filter {...props}>
        <TextInput label="assigned_dispatcher" source="assigned_dispatcher" defaultValue="" />
        <TextInput label="location" source="location" defaultValue="" />
        <TextInput label="contact_name" source="contact_name" defaultValue="" />
        <TextInput label="contact_phone" source="contact_phone" defaultValue="" />
    </Filter>
);

const AidPanel = props => (
    <Edit {...props} title="">
        <SimpleForm>
            <TextInput source="location" />
            <TextInput source="contact_name" />
            <TextInput source="contact_phone" />
            <RichTextInput source="description" />
        </SimpleForm>
    </Edit>
);

export default AidRequestList;