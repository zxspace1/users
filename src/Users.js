import React, { Component } from 'react';

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

    render() {
        return(
            <div className="users-main">
                <h1>Users list</h1>
                
                <form onSubmit = {this.addUser}>
                    <input ref={(data) => this.inputName = data} 
                    type="text" placeholder="Enter name"/>
                    <button type="submit"> Add user </button>
                </form>
            </div>
        )
    }
}
export default Users