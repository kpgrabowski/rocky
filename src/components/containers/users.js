import React, {Component} from 'react';

class User extends Component {

    constructor() {
        super();
        this.state ={
            userName:'',
            password:'',
        }
    }

    onUserUpdate(field, event){
        console.log("Siemak");
        console.log('onUserUpdate: ' + field + '==' + event.target.value);
    }

    render(){
        console.log("Elo");

        return (
            <div style={{paddingLeft:24}}>
                There is User container!!<br/>
                <input onChange={this.onUserUpdate.bind(this, 'userName')}
                       type="text"
                       placeholder="userName"
                />
                <br/>
                <br/>
                <input type="password"
                       placeholder="password"
                       onChange={this.onUserUpdate.bind(this, 'password')}
                /><br/>
                <button>Add User</button>
            </div>
        )
    }
}

export default User;