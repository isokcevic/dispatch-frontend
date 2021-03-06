import * as React from "react";
import {
    BooleanField,
    Datagrid,
    DateField,
    Edit,
    Filter,
    List,
    ReferenceField,
    TextField,
    TextInput
} from "react-admin";
import PanelForm from "./Forms/PanelForm";
import DescriptionField from "./Components/DescriptionField";

const EntriesList = props => (
    <List {...props} bulkActionButtons={false} filters={<EntriesFilter />} >
        <Datagrid expand={EntriesPanel}>
            <DateField source="published_at" locales="hr-HR" showTime />
            <TextField source="status" />
            <BooleanField source="fulfilled" />
            <ReferenceField source="assigned_coordinator" reference="coordinators">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="volunteer_assigned" />
            <TextField source="location" />
            <TextField source="contact_name" />
            <TextField source="contact_phone" />
            <DescriptionField source="description" />
        </Datagrid>
    </List>
);

const EntriesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="assigned_dispatcher" source="assigned_dispatcher" defaultValue="" />
        <TextInput label="location" source="location" defaultValue="" />
        <TextInput label="contact_name" source="contact_name" defaultValue="" />
        <TextInput label="contact_phone" source="contact_phone" defaultValue="" />
    </Filter>
);

const EntriesPanel = props => (
    <Edit {...props} title="" >
        <PanelForm />
    </Edit>
);

export default EntriesList;