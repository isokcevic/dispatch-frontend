import * as React from "react";
import {FormWithRedirect, SaveButton, TextInput, BooleanInput, SimpleForm} from "react-admin";
import {Grid, Toolbar} from "@material-ui/core";

const PanelForm = props => (
    <FormWithRedirect {...props} render={renderForm} />
)

const renderForm = formProps => (
    <form>
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <TextInput source="type_slug"/>
            </Grid>
            <Grid item xs={4}>
                <TextInput source="type_name"/>
            </Grid>
            <Grid item xs={4}>
                <TextInput source="add_entry_label"/>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <TextInput source="menu_title"/>
            </Grid>
            <Grid item xs={4}>
                <TextInput source="plural_title"/>
            </Grid>
            <Grid item xs={4}>
                <BooleanInput source="available_in_public_menu"/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
                <TextInput source="category_color_hex" />
            </Grid>
        </Grid>
        <Toolbar>
            <Grid container justify="space-between">
                <SaveButton
                    saving={formProps.saving}
                    handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                />
            </Grid>
        </Toolbar>
    </form>
);

export default PanelForm;