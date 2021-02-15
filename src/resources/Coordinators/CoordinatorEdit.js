import { Edit } from "react-admin";
import CreateUpdateForm from "./Forms/CreateUpdateForm";

const CoordinatorEdit = props => (
    <Edit {...props}>
        <CreateUpdateForm />
    </Edit>
);

export default CoordinatorEdit;
