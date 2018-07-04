import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';

class User extends Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
        }
    }

    onUserUpdate(field, event) {
       // console.log('onUserUpdate: ' + field + '==' + event.target.value);

        if (field == 'userName') {
            this.setState({
                userName: event.target.value
            });
            return;
        }
        if (field == 'password') {
            this.setState({
                password: event.target.value
            });
            return;
        }
    }

    addUser(event) {
        // console.log('ADD_USER: ' + JSON.stringify(this.state.userName));
        // console.log('ADD_USER: ' + JSON.stringify(this.state.password));

        const user = {
            userName: this.state.userName,
            password: this.state.password,
        };
        console.log('ADD_USER: ' + JSON.stringify(user));

    }

    render() {

        return (
            <div style={{paddingLeft: 24}}>
                There is User container!!<br/>
                <input onChange={this.onUserUpdate.bind(this, 'userName')}
                       type="text"
                       placeholder="userName"
                />
                <br/>
                <input type="password"
                       placeholder="password"
                       onChange={this.onUserUpdate.bind(this, 'password')}
                /><br/>
                <button onClick={this.addUser.bind(this)}>Add User</button>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return{
        user: state.user,
    }
};

const dispatchToProps = () => {
    return

};


export default connect(stateToProps, dispatchToProps)(User);