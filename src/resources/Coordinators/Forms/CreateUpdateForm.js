import { SimpleForm, TextInput} from "react-admin";

const CreateUpdateForm = (props) => (

    <SimpleForm {...props} >
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="phone_number" />
    </SimpleForm>
);

export default CreateUpdateForm;

