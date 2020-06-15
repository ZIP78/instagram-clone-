import React from "react";
import "./profile_page.css";
import IosSettings from "react-ionicons/lib/IosSettings";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ProfilePageUploader from "./profile_page_uploader";
import Follow from "../follow/follow";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestUsers();

    this.props.requestAllPost();
  }

  numOfPost() {
    let profileUser = this.props.profileUser;
    let posts = Object.values(this.props.posts);
    let postsByUser = posts.filter((post) => post.user_id === profileUser.id);
    return <div className="profile_page_posts">{postsByUser.length} posts</div>;
  }

  postByUser() {
    let profileUser = this.props.profileUser;
    let posts = Object.values(this.props.posts);
    return posts.filter((post) => post.user_id === profileUser.id);
  }

  followOption() {
    let profileUser = this.props.profileUser;
    if (profileUser.username === currentUser.username) {
      return (
        <div className="name_edit_setting_container">
          <div className="profile_page_username">{profileUser.username}</div>

          <div className="profile_page_edit_button_container">
            <button className="profile_page_edit_button">Edit Profile</button>
          </div>
          <div className="profile_page_setting_container">
            <IosSettings className="profile_page_setting_button" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="name_edit_setting_container">
          <div className="profile_page_username">{profileUser.username}</div>
          <Follow
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            loggedInUser={this.props.loggedInUser}
          />
        </div>
      );
    }
  }

  render() {
    const { profileUser, profilePicture } = this.props;
    if (!profileUser) return null;
    return (
      <div>
        <div className="profile_pic_page_container">
          <ProfilePageUploader
            user={profileUser}
            profilePicture={profilePicture}
          />

          <div className="profile_page_information_container">
            {this.followOption()}

            <div className="post_followers_container">
              {this.numOfPost()}
              <div className="profile_page_followers">0 followers</div>
              <div className="profile_page_following">0 following</div>
            </div>

            <div className="profile_page_name">
              <div>{profileUser.first_name}</div>
            </div>
          </div>
        </div>

        <div className="profile_page_border"></div>
        <div className="profile_page_post_container">
          {this.postByUser().map((post) => (
            <div>
              {post.photoUrl.split(".").pop() === "mp4" ? (
                <Link
                  to={{
                    pathname: `/posts/${post.id}`,
                  }}
                >
                  <ReactPlayer
                    width={293}
                    height={293}
                    className="profile_page_vid"
                    url={[{ src: post.photoUrl }]}
                    controls={true}
                  />
                </Link>
              ) : (
                <Link
                  to={{
                    pathname: `/posts/${post.id}`,
                  }}
                >
                  <img className="profile_page_post" src={post.photoUrl} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProfilePage;
