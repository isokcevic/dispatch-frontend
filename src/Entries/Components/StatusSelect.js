import * as React from "react";
import { SelectInput } from "react-admin";

const StatusSelect = _ => (
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
);

export default StatusSelect;
