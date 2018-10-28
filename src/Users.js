import React, { Component } from 'react';
import UsersList from "./UsersList";

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
        }
    }


    addUser = (e) => {
        e.preventDefault();

        let newUser = {
            key: Date.now(),
            userName: this.inputName.value,
        }

        this.setState( (prevState) => {
            return({
                usersList: prevState.usersList.concat(newUser),
            })
        })

        this.inputName.value = "";
    }

    removeUser = (userKey) => {

        let filteredUsers = this.state.usersList.filter( (user) =>user.key
        !== userKey);

        this.setState({
            usersList: filteredUsers,
        });
    }

    render() {
        return(
            <div className="users-main">
                <h1>User's List</h1>
                
                <form onSubmit = {this.addUser}>
                    <input ref={(data) => this.inputName = data} 
                    type="text" placeholder="Enter name"/>
                    <button type="submit"> Add user </button>
                </form>
                <UsersList removeUser={this.removeUser} usersList=
                {this.state.usersList} />
            </div>
        )
    }
}
export default Users