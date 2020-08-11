import React from "react";
import "./profile_page.css";

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:
        this.props.loggedInUser.first_name +
        " " +
        this.props.loggedInUser.last_name,
    };
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleUsername(e) {
    e.preventDefault();
    this.setState({ userName: e.currentTarget.value });
  }

  render() {
    const { loggedInUser } = this.props;
    return (
      <section>
        <div className="modal-title-container">
          <div className="modal-title">Edit Profile</div>
        </div>
        <form className="edit-page-form">
          <div className="edit-username-container">
            <div className="edit-name-label">Name</div>
            <div className="edit-input-container">
              <input
                id="edit-input"
                className="edit-input"
                type="text"
                value={this.state.userName}
                onChange={this.handleUsername}
                placeholder="Name"
              />
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default EditProfilePage;
