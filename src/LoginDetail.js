import React, {PropTypes} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

export default class LoginDetail extends React.Component {
    render() {
        const {name, password} = this.state;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>

            <div>
                <Card>
                    <CardHeader
                        title="Login"
                        subtitle="Bitte anmelden"
                        />
                    <CardText>
                        <TextField hintText="Name"
                                   floatingLabelText="Name"
                                   onChange={event => this.updateModel('name', event.target.value)}
                                   value={name} />
                        <TextField hintText="Passwort"
                                   floatingLabelText="Passwort"
                                   onChange={event => this.updateModel('password', event.target.value)}
                                   value={password} />

                    </CardText>
                    <CardActions>
                        <FlatButton
                            primary={true}
                            label="Anmelden"
                            onClick={() => this.save()}>

                        </FlatButton>
                        <FlatButton
                            secondary={true}
                            label="Clear"
                            onClick={() => this.reset()}>

                        </FlatButton>
                    </CardActions>
                </Card>


            </div>
                </MuiThemeProvider>
                );
    }
    constructor(props) {
        super(props);
        const {name, password} = this.props.defaultText || {};
        this.state = {
            name,
            password
        };
    }
    login() {
        console.log("Login");
    }
    save() {
        const {onLogin} = this.props;
        const {name, password} = this.state;
        onLogin({
            name,
            password
        });
    }
    reset() {
        this.setState({name: '', password: ''});
        this.input.focus();
    }
    updateModel(name, value) {
        this.setState({[name]: value});
    }
}
LoginDetail.propTypes = {
    login: PropTypes.shape({
        name: PropTypes.string.isRequired,
        password: React.PropTypes.string.isRequired
    }),
    onLogin: PropTypes.func.isRequired
};
