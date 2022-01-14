import React, { Component } from "react";
import axios from "axios";

class PlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.phone = React.createRef();
        this.email = React.createRef();
    }

    submitPlayer(event) {
        event.preventDefault();

        axios.post('http://localhost:4000/players', {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            phone: this.phone.current.value,
            email: this.email.current.value,
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="row">
                <h1>Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref={this.firstName} type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref={this.lastName} type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref={this.phone} type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref={this.email} type="text" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action" >
                        Add player
                    </button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;