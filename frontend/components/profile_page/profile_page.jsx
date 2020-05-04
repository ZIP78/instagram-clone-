import React from "react";
import "./profile_page.css";
import IosSettings from "react-ionicons/lib/IosSettings";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  numOfPost() {
    let user = this.props.user;
    let posts = Object.values(this.props.posts);
    let postsByUser = posts.filter((post) => post.user_id === user.id);
    debugger;
    return (
      <div className="profile_page_posts">{postsByUser.length} postss</div>
    );
  }

  componentDidMount() {
    this.props.user;
    this.props.requestAllPost();
  }

  render() {
    const { user } = this.props;
    debugger;
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

            <div className="post_followers_container">
              {/* <div className="profile_page_posts">0 posts</div> */}
              {this.numOfPost()}
              <div className="profile_page_followers">0 followers</div>
              <div className="profile_page_following">0 following</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
