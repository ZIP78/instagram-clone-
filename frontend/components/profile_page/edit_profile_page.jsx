import React from "react";
import "./profile_page.css";

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
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
            <div>Name</div>
            <div>
              <input type="text" placeholder={loggedInUser.username} />
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default EditProfilePage;
