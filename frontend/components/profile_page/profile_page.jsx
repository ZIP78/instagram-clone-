import React from "react";
import "./profile_page.css";
import IosSettings from "react-ionicons/lib/IosSettings";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ProfilePageUploader from "./profile_page_uploader";
import Follow from "../follow/follow";
import ProfilePageInfo from "./profile_page_info";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestAllPost();
  }

  postByUser() {
    let profileUser = this.props.profileUser;
    let posts = Object.values(this.props.posts);
    return posts.filter((post) => post.user_id === profileUser.id);
  }

  followOption() {
    let profileUser = this.props.profileUser;
    let loggedInUser = this.props.loggedInUser;

    if (profileUser.username === loggedInUser.username) {
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
            user={profileUser}
            currentUser={loggedInUser}
          />
        </div>
      );
    }
  }

  render() {
    const {
      profileUser,
      profilePicture,
      users,
      loggedInUser,
      requestFollows,
      posts,
      follows,
    } = this.props;
    if (!profileUser || !users) return null;
    return (
      <div className="profile_page_container">
        <div className="profile_pic_page_container">
          <ProfilePageUploader
            user={profileUser}
            currentUser={loggedInUser}
            profilePicture={profilePicture}
            requestFollows={requestFollows}
          />

          <div className="profile_page_information_container">
            {this.followOption()}

            <ProfilePageInfo
              profileUser={profileUser}
              loggedInUser={loggedInUser}
              posts={posts}
              requestFollows={requestFollows}
              follows={follows}
            />

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
