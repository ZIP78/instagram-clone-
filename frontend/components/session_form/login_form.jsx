import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };

        this.handle = this.handle.bind(this)
        this.update = this.update.bind(this)
    }

    handle() {
        this.props.loginForm(this.state) 
        //then direct them somewhere else
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
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

                <label>Password
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

export default LoginForm