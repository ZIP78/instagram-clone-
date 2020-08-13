import React from "react";
import "./profile_page.css";

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:
        this.props.loggedInUser.first_name +
        " " +
        this.props.loggedInUser.last_name,
      userName: this.props.loggedInUser.username,
      // bio: this.props.
    };
    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleName(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  handleUsername(e) {
    e.preventDefault();
    this.setState({ userName: e.currentTarget.value });
  }

  render() {
    const { loggedInUser } = this.props;
    debugger;
    return (
      <section>
        <div className="modal-title-container">
          <div className="modal-title">Edit Profile</div>
        </div>
        <form className="edit-page-form">
          <div className="edit-name-container">
            <div className="edit-name-label">Name</div>
            <div className="edit-input-container">
              <input
                id="edit-input"
                className="edit-input"
                type="text"
                value={this.state.name}
                onChange={this.handleName}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="edit-username-container">
            <div className="edit-username-label">Username</div>
            <div className="edit-input-container">
              <input
                id="edit-input"
                className="edit-input"
                type="text"
                value={this.state.userName}
                onChange={this.handleUsername}
                placeholder="Username"
              />
            </div>
          </div>

          <div className="edit-bio-container">
            <div className="edit-bio-label">Username</div>
            <div className="edit-input-container">
              <input
                id="edit-input"
                className="edit-input"
                type="text"
                value={this.state.userName}
                onChange={this.handleUsername}
                placeholder="Username"
              />
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default EditProfilePage;
