import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        };
        this.handle = this.handle.bind(this)
        this.update = this.update.bind(this)
    }

    update(field) {
        return e => {
        this.setState({[field]: e.currentTarget.value })
        }
    } 

    handle() {
        this.props.signupForm(this.state)
        // maybe later create a then 
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <form onSubmit={this.handle}>
                <h1>{this.props.formType}</h1>
                <label>Username
                    <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>
                <label>First Name
                    <input
                        type="text"
                        value={this.state.first_name}
                        onChange={this.update('first_name')}
                    />
                </label>
                <label>Last Name
                    <input
                        type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')}
                    />
                </label>

                <label>password
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                    <input type="submit" value={this.props.formType}/>
            </form>
        )
    }
}

export default SignupForm