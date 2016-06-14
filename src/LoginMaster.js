import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};

export default function LoginMaster(props) {
    const {logins, onLogin} = props;
    const body = logins.map(login => <TableRow key={login.id}><TableRowColumn>{login.id}</TableRowColumn><TableRowColumn>{login.name}</TableRowColumn><TableRowColumn>{login.password}</TableRowColumn></TableRow>);
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Password</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {body}
                </TableBody>
            </Table>
            <FlatButton
                primary={true}
                label="Neuen Login"
                onClick={onLogin}>

            </FlatButton>

        </div>
        </MuiThemeProvider>
    );
}
