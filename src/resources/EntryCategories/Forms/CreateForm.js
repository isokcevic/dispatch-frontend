import {BooleanInput, SimpleForm, TextInput} from "react-admin";
import {ColorInput} from "react-admin-color-input";

const CreateForm = props => (
    <SimpleForm {...props}>
        <TextInput source="type_slug" />
        <TextInput source="type_name" />
        <TextInput source="add_entry_label" />
        <TextInput source="menu_title" />
        <TextInput source="plural_title" />
        <BooleanInput source="available_in_public_menu" />
        <ColorInput source="category_color_hex" picker="Chrome" />
    </SimpleForm>
);

export default CreateForm;