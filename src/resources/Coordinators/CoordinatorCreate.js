import { Create } from "react-admin";
import CreateUpdateForm from "./Forms/CreateUpdateForm";

const CoordinatorCreate = props => (
    <Create {...props}>
        <CreateUpdateForm />
    </Create>
);

export default CoordinatorCreate;
