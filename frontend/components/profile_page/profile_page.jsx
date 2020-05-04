import React from "react";
import "./profile_page.css";
import IosSettings from "react-ionicons/lib/IosSettings";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.user;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="profile_pic_page_container">
          <div className="profile_page_pic_container">
            <div className="profile_page_pic_upload"></div>
          </div>
          <div className="profile_page_information_container">
            <div className="profile_page_username">{user.username}</div>
            <div className="profile_page_edit_button_container">
              <button className="profile_page_edit_button">Edit Profile</button>
            </div>
            <div className="profile_page_setting_container">
              <IosSettings className="profile_page_setting_button" />
            </div>

            <div className="post_followers_container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
