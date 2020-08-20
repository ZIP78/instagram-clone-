import React from "react";
import "./profile_page.css";

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.loggedInUser.first_name,
      lastName: this.props.loggedInUser.last_name,
      userName: this.props.loggedInUser.username,
      bio: this.props.loggedInUser.bio,
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleUpdates = this.handleUpdates.bind(this);
  }

  handleFirstName(e) {
    e.preventDefault();
    this.setState({ firstName: e.currentTarget.value });
  }

  handleLastName(e) {
    e.preventDefault();
    this.setState({ lastName: e.currentTarget.value });
  }

  handleUsername(e) {
    e.preventDefault();
    this.setState({ userName: e.currentTarget.value });
  }

  handleBio(e) {
    e.preventDefault();
    this.setState({ bio: e.currentTarget.value });
  }

  handleUpdates(e) {
    e.preventDefault();
    let formData = new FormData();
    if (
      this.state.firstName ||
      this.state.lastName ||
      this.state.userName ||
      this.state.bio
    ) {
      formData.append("user[first_name]", this.state.firstName);
      formData.append("user[last_name]", this.state.lastName);
      formData.append("user[username]", this.state.userName);
      formData.append("user[bio]", this.state.bio);
    }
    this.props.editProfile(formData);
  }

  render() {
    const { loggedInUser } = this.props;

    return (
      <section>
        <div className="modal-title-container">
          <div className="modal-title">Edit Profile</div>
        </div>
        <form onSubmit={this.handleUpdates} className="edit-page-form">
          <div className="edit-firstName-container">
            <div className="edit-firstName-label">First Name</div>
            <div className="edit-input-container">
              <input
                id="edit-input"
                className="edit-input"
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstName}
                placeholder="First Name"
              />
            </div>
          </div>

          <div className="edit-lastName-container">
            <div className="edit-lastName-label">Last Name</div>
            <div className="edit-input-container">
              <input
                id="edit-input"
                className="edit-input"
                type="text"
                value={this.state.lastName}
                onChange={this.handleLastName}
                placeholder="Last Name"
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
            <div className="edit-bio-label">Bio</div>
            <div className="edit-input-container">
              <input
                id="edit-input"
                className="edit-input"
                type="text"
                value={this.state.bio}
                onChange={this.handleBio}
                placeholder="Username"
              />
            </div>
          </div>
          <button className="profile-edit-button">Edit</button>
        </form>
      </section>
    );
  }
}

export default EditProfilePage;
