import * as React from "react";
import {Datagrid, EditButton, List, TextField} from "react-admin";

const CoordinatorsList = props => (
   <List {...props} bulkActionButtons={false}>
       <Datagrid>
           <TextField source="name" />
           <TextField source="email" />
           <TextField source="phone_number" />
           <EditButton />
       </Datagrid>
   </List>
);

export default CoordinatorsList;