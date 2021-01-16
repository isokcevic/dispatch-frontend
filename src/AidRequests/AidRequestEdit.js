import { Edit, SelectInput, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

/** @todo: move to forms, and use select component for statuses - if this is to be used at all */
/** @deprecated */
const AidRequestEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput source="status" choices={[
                { id: 'novo', name: 'Novo' },
                { id: 'provjereno', name: 'Provjereno' },
                { id: 'rizicno_opasno', name: 'Opasno' },
                { id: 'preuzeto', name: 'Preuzeto' },
                { id: 'u_izvrsavanju', name: 'U izvršavanju' },
                { id: 'parcijalno_rijeseno', name: 'Djelomično riješeno' },
                { id: 'treba ponoviti', name: 'Treba ponoviti' },
                { id: 'zavrseno', name: 'Završeno' },
            ]} />
            <TextInput source="location" />
            <TextInput multiline source="description" />
            <TextInput source="contact_name" />
            <TextInput source="contact_phone" />
            <TextInput source="volunteer_assigned" />
        </SimpleForm>
    </Edit>
);

export default AidRequestEdit;