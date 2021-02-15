import * as React from "react";
import { BooleanField, Datagrid, Edit, List, TextField } from "react-admin";
import PanelForm from "./Forms/PanelForm";

const EntryCategoriesList = props => (
    <List {...props}  bulkActionButtons={false}>
        <Datagrid expand={EntryCategoriesPanel}>
            <TextField source="menu_title" />
            <TextField source="type_slug" />
            <TextField source="type_name" />
            <TextField source="add_entry_label" />
            <BooleanField source="available_in_public_menu" />
        </Datagrid>
    </List>
);

const EntryCategoriesPanel = props => (
    <Edit {...props} title="">
        <PanelForm />
    </Edit>
);

export default EntryCategoriesList;
