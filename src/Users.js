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
        if (this.validate(this.inputName)) {

        

        let newUser = {
            key: Date.now(),
            userName: this.inputName.value,
        }

        this.setState( (prevState) => {
            return({
                usersList: prevState.usersList.concat(newUser),
                errorMsg: "",
            })
        })

        this.inputName.value = "";
    } else {
        this.setState ({
            errorMsg: "Enter name!!",
        });
    }
}
    

    validate = (item) => {
        if (item.value === "") {
            return false;
            } else {
            return true;
            }
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
                <div className="error-msg">{this.state.errorMsg}</div>
                <UsersList removeUser={this.removeUser} usersList=
                {this.state.usersList} />
                
            </div>

        )
    }
}
export default Users