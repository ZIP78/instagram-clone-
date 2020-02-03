    import React from 'react';
    import {Link} from 'react-router-dom'
    import sad from '../../../app/assets/images/cry.jpg'
    import average from '../../../app/assets/images/avg.png'
    import happy from '../../../app/assets/images/happy.png'


    class LoginForm extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                username: '',
                password: '',
            };

            this.handle = this.handle.bind(this)
            this.demoUser = this.demoUser.bind(this)
        }

        componentWillUnmount() {
            this.props.clearErrors();
        }

        handle(e) {
            e.preventDefault();
            this.props.loginForm(this.state)
                // .then(() => this.props.history.push('/'));


                // .then(() => this.props.history.push('/')); 
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
                return <div className="errors">
                        {this.props.errors.map((error, idx) => <p className="error-text" key={idx}>{error}</p>)} 
                      </div>
            }
        }

        demoUser(e) {
            e.preventDefault();
            this.props.loginForm({
                username: 'yoyo',
                password: 'hunter123'
            })
        }

        render() {
            return (
                <main className="main1">
                    <article className="main2">
                
                        <div className="phone"> 
                            <div className="containerPhotos">
                                <img className="feelings" src={sad}/>
                                <img className="feelings" src={average}/>
                                <img className="feelings" src={happy}/>
                            </div>
                        </div>

                        <div className="form-container">
                            <div className="loginBox">
                                <h1 className="name">Whoopiegram</h1>
                            <div className="form-section">
                                <form className="form" onSubmit={this.handle}>
            
                            <div className="user-container"> 
                                <div className="user-box">
                                    <input className="username" 
                                        placeholder="Username"
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                    />
                                    <label>Username</label>
                                </div>
                            </div>   
            
                            <div className="pw-container">
                                <div className="pw-box">
                                    <input className="password focus-visible"
                                        placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                    <label className="divide-pw-box">Password</label>
                                </div>
                            </div>
                            
                            <div className="login">
                                <button type="submit" className="login-button">{this.props.formType}</button>
                            </div>

                            <div className="or-container">
                                <div className="or-line"></div>
                                <div className="or">or</div>
                                <div className="or-line"></div>
                            </div>

                            <div className="login">
                                <button onClick={this.demoUser} className="login-button">Demo User</button>
                            </div>

                            {this.renderErrors()}

                            <div className="forgot-pw-container">
                                <a className="tooBad" href="https://www.youtube.com/watch?v=rAlTOfl9F2w">Forgot password?</a>
                            </div>
                                </form>
                            </div>
                            </div>
                            <div className="signup-container">
                                <div className="signup">
                                    <p className="dont-have">
                                        Don't have an account?  
                                        <Link id="link" to={`/signup`}> <span className="signup-font">Sign Up</span> </Link>
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </article>
                </main>
            )
        } 
    }

    export default LoginForm