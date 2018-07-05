import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';



class CurrentUsers extends Component {



    render() {
        return (
            <div style={{paddingLeft: 24}}>
                <h3 style={{marginBottom: 0}}>Current Users</h3>
                <ol style={{paddingLeft: 16, color: "red"}}>
                    {this.props.user.all.map((user, i) => {
                        return <li key={user.userName}>{user.userName}</li>
                    })
                    }
                </ol>


            </div>
        )
    }
}

const stateToProps = (state) => {
    return{
        user: state.user,
    }
};

const dispatchToProps = (dispatch) => {
    return{
        createUser: (user) => dispatch(actions.createUser(user)),
    }

};


export default connect(stateToProps, dispatchToProps)(CurrentUsers);