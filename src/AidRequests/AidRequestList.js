import * as React from "react";
import {
    BooleanField,
    Datagrid,
    DateField,
    Edit,
    Filter,
    FunctionField,
    List,
    TextField,
    TextInput
} from "react-admin";
import AidRequestPanelForm from "./Forms/AidRequestPanelForm";
import DescriptionField from "./Components/DescriptionField";

const AidRequestList = props => (
    <List {...props} filters={<AidRequestFilter />} >
        <Datagrid expand={AidRequestPanel}>
            <DateField source="published_at" locales="hr-HR" showTime />
            <TextField source="status" />
            <BooleanField source="fulfilled" />
            <TextField source="assigned_dispatcher" />
            <TextField source="volunteer_assigned" />
            <TextField source="location" />
            <TextField source="contact_name" />
            <TextField source="contact_phone" />
            <DescriptionField source="description" />
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

const AidRequestPanel = props => (
    <Edit {...props} title="" >
        <AidRequestPanelForm />
    </Edit>
);

export default AidRequestList;