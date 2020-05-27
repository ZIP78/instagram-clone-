import React from "react";
import { Link } from "react-router-dom";
import sad from "../../../app/assets/images/cry.jpg";
import average from "../../../app/assets/images/avg.png";
import happy from "../../../app/assets/images/happy.png";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    };
    this.handle = this.handle.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return null;
    } else {
      return (
        <div className="errors">
          {this.props.errors.map((error, idx) => (
            <p className="error-text" key={idx}>
              {error}
            </p>
          ))}
        </div>
      );
    }
  }

  handle(e) {
    e.preventDefault();
    this.props.signupForm(this.state);
    // .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return null;
    } else {
      return (
        <div className="errors">
          {this.props.errors.map((error, idx) => (
            <p className="error-text" key={idx}>
              {error}
            </p>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <main className="main1">
        <article className="signup-main">
          <div className="form-container-signup">
            <div className="signinBox">
              <div className="signup-section">
                <h1 className="name">Whoopiegram</h1>

                <div className="form-section-signup">
                  <form className="form" onSubmit={this.handle}>
                    <h2 className="signup-descript">
                      Sign up to see funny clips to release good vibes.
                    </h2>
                    <div className="signup-to-login-container">
                      <Link to="/login">
                        <button type="button" className="go-to-login">
                          Log in
                        </button>
                      </Link>
                    </div>

                    <div className="or-container">
                      <div className="or-line"></div>
                      <div className="or">or</div>
                      <div className="or-line"></div>
                    </div>

                    <div className="email-container">
                      <div className="email-box">
                        <input
                          className="email"
                          placeholder="Email"
                          type="email"
                          value={this.state.email}
                          onChange={this.update("email")}
                          required={true}
                        />
                        <label className="divide-email-box">Email</label>
                      </div>
                    </div>

                    <div className="fname-container">
                      <div className="fname-box">
                        <input
                          className="fname"
                          placeholder="First Name"
                          type="text"
                          value={this.state.first_name}
                          onChange={this.update("first_name")}
                          required={true}
                        />
                        <label className="divide-fname-box">First Name</label>
                      </div>
                    </div>

                    <div className="lname-container">
                      <div className="lname-box">
                        <input
                          className="lname"
                          placeholder="Last Name"
                          type="text"
                          value={this.state.last_name}
                          onChange={this.update("last_name")}
                          required={true}
                        />
                        <label className="divide-lname-box">Last Name</label>
                      </div>
                    </div>

                    <div className="user-container">
                      <div className="user-box">
                        <input
                          className="username"
                          placeholder="Username"
                          type="text"
                          value={this.state.username}
                          onChange={this.update("username")}
                          required={true}
                        />
                        <label>Username</label>
                      </div>
                    </div>

                    <div className="pw-container">
                      <div className="pw-box">
                        <input
                          className="password focus-visible"
                          placeholder="Password"
                          type="password"
                          value={this.state.password}
                          onChange={this.update("password")}
                          required={true}
                          pattern=".{6,}"
                        />
                        <label className="divide-pw-box">Password</label>
                      </div>
                    </div>
                    {this.renderErrors()}
                    <div className="login">
                      <button type="submit" className="login-button">
                        {this.props.formType}
                      </button>
                    </div>

                    <p className="agreement">
                      By signing up you agree to be in a better mood after usage
                      of this service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  }
}

export default SignupForm;
