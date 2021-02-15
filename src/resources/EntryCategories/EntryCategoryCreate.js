import { Create } from "react-admin";
import CreateForm from "./Forms/CreateForm";

const EntryCategoryCreate = props => (
    <Create {...props}>
        <CreateForm />
    </Create>
);

export default EntryCategoryCreate;