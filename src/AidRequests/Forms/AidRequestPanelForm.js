import * as React from "react";
import {DeleteButton, FormWithRedirect, SaveButton, ReferenceInput, SelectInput, TextInput} from "react-admin";
import {Grid, Toolbar} from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import StatusSelect from "../Components/StatusSelect";


const AidRequestPanelForm = props => (
    <FormWithRedirect {...props} render={renderForm} />
);

const renderForm = formProps => (
    <form>
        <Grid container>
            <Grid container xs={6}>
                <Grid container spacing={1}>
                    <Grid item>
                        <StatusSelect />
                    </Grid>
                    <Grid item>
                        <ReferenceInput source="assigned_dispatcher" reference="coordinators">
                            <SelectInput optionText="name" />
                        </ReferenceInput>
                        {/*<TextInput source="assigned_dispatcher" resource="aid-requests" />*/}
                    </Grid>
                    <Grid item>
                        <TextInput source="volunteer_assigned" resource="aid-requests" />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item>
                        <TextInput source="location" resource="aid-requests" />
                    </Grid>
                    <Grid item>
                        <TextInput source="contact_name" resource="aid-requests" />
                    </Grid>
                    <Grid item>
                        <TextInput source="contact_phone" resource="aid-requests" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={6} spacing={1}>
                <RichTextInput source={"description"} resource={"aid-requests"} />
            </Grid>
        </Grid>
        <Toolbar>
            <Grid container justify={"space-between"}>
                <SaveButton
                    saving={formProps.saving}
                    handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                />
                <DeleteButton record={formProps.record} />
            </Grid>
        </Toolbar>
    </form>
);

export default AidRequestPanelForm;