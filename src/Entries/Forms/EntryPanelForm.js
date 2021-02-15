import * as React from "react";
import {DeleteButton, FormWithRedirect, SaveButton, ReferenceInput, SelectInput, TextInput} from "react-admin";
import {Grid, Toolbar} from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import StatusSelect from "../Components/StatusSelect";


const EntryPanelForm = props => (
    <FormWithRedirect {...props} render={renderForm} />
);

const renderForm = formProps => (
    <form>
        <Grid container>
            <Grid item xs={6}>
                <Grid container spacing={1}>
                    <Grid item>
                        <StatusSelect />
                    </Grid>
                    <Grid item>
                        <ReferenceInput source="assigned_coordinator" reference="coordinators">
                            <SelectInput optionText="name" />
                        </ReferenceInput>
                    </Grid>
                    <Grid item>
                        <TextInput source="volunteer_assigned" resource="entries" />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item>
                        <TextInput source="location" resource="entries" />
                    </Grid>
                    <Grid item>
                        <TextInput source="contact_name" resource="entries" />
                    </Grid>
                    <Grid item>
                        <TextInput source="contact_phone" resource="entries" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <RichTextInput source={"description"} resource={"entries"} />
            </Grid>
        </Grid>
        <Toolbar>
            <Grid container justify={"space-between"}>
                <SaveButton
                    saving={formProps.saving}
                    handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                />
            </Grid>
        </Toolbar>
    </form>
);

export default EntryPanelForm;