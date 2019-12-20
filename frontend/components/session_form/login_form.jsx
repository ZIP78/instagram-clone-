import React from 'react';
import {Link} from 'react-router-dom'

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

    handle(e) {
        e.preventDefault();
        this.props.loginForm(this.state)
            .then(() => this.props.history.push('/')); 
        //then direct them somewhere else
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    renderErrors() {
        if (this.props.errors.length === 0) {
            return null;
        } else {
            return <ul>
                {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)} 
                </ul>
        }
    }

    render() {
        return (
            <form onSubmit={this.handle}>
                <div>
                    <Link to={'/signup'}>Sign up</Link>
                </div>
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
                {this.renderErrors()}
                    <input type="submit" value={this.props.formType}/>
            </form>
            
        )
    } 
}

export default LoginForm