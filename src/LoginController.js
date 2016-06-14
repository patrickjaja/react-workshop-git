import React from 'react';
import LoginMaster from './LoginMaster';
import LoginDetail from './LoginDetail';

let currentId = 0;

const sampleLogins = [{
    id: currentId++,
    name: 'Olli',
    password: 'Huhu'
},
    {
        id: currentId++,
        name: 'Oma',
        password: 'Hallo'
    }
];

const MODE_MASTER = 'MODE_MASTER';
const MODE_DETAIL = 'MODE_DETAIL';

export default class LoginController extends React.Component {
    render() {
        const {mode, logins} = this.state;
        return (
            <div>
                {mode === MODE_MASTER ? 
                    <LoginMaster logins={logins}
                                 onLogin={() => this.setState({mode: MODE_DETAIL})}
                    /> :
                    <LoginDetail onLogin={(login) => this.addLogin(login)} />
                }
            </div>);
    }
    constructor(props) {
        super(props);
        this.state = {
            logins: sampleLogins,
            mode: MODE_MASTER
        };
    }

    addLogin(loginToBeAdded) {
        const {logins} = this.state;
        loginToBeAdded.id = currentId++;
        logins.push(loginToBeAdded);
        this.setState({
            logins,
            mode: MODE_MASTER
        });
    }
}
