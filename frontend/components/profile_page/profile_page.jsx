import React from "react";
import "./profile_page.css";
import IosSettings from "react-ionicons/lib/IosSettings";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ProfilePageUploader from "./profile_page_uploader";
import Follow from "../follow/follow";
import ProfilePageInfo from "./profile_page_info";
import Modal from "react-modal";
import EditProfilePage from "./edit_profile_page";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showLightModeOption: false,
    };
    this.showEditPage = this.showEditPage.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    this.showLightingSetting = this.showLightingSetting.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestAllPost();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.darkmodeEnabled !== prevProps.darkmodeEnabled) {
      localStorage.setItem("dark", JSON.stringify(this.props.darkmodeEnabled));
    }
  }

  showEditPage() {
    this.setState({ show: true });
  }

  closeEdit() {
    this.setState({ show: false });
  }

  showLightingSetting(event) {
    if (!this.state.showLightModeOption) {
      document.addEventListener("mousedown", this.closeSettings, false);
    } else {
      document.removeEventListener("mousedown", this.closeSettings, false);
    }
    this.setState((prevState) => ({
      showLightModeOption: !prevState.showLightModeOption,
    }));
  }

  handleOptionChange(darkMode) {
    this.setState({ darkMode });
  }

  closeSettings(event) {
    if (this.node.contains(event.target)) {
      return;
    }
    this.showLightingSetting();
  }

  postByUser() {
    let profileUser = this.props.profileUser;
    let posts = Object.values(this.props.posts);
    return posts.filter((post) => post.user_id === profileUser.id);
  }

  followOption() {
    let profileUser = this.props.profileUser;
    let loggedInUser = this.props.loggedInUser;
    let editProfile = this.props.editProfile;

    if (profileUser.username === loggedInUser.username) {
      return (
        <div className="name_edit_setting_container">
          <div className="profile_page_username">{profileUser.username}</div>

          <div
            className={
              this.props.darkmodeEnabled
                ? "profile_page_edit_button_container_darkMode"
                : "profile_page_edit_button_container"
            }
          >
            <button
              onClick={this.showEditPage}
              className={
                this.props.darkmodeEnabled
                  ? "profile_page_edit_button_darkMode"
                  : "profile_page_edit_button"
              }
            >
              Edit Profile
            </button>

            <Modal
              className={
                this.props.darkmodeEnabled ? "Modal-darkMode" : "Modal"
              }
              overlayClassName="Overlay"
              isOpen={this.state.show}
              onRequestClose={this.closeEdit}
              ariaHideApp={false}
            >
              <EditProfilePage
                darkmodeEnabled={this.props.darkmodeEnabled}
                loggedInUser={loggedInUser}
                editProfile={editProfile}
              />
            </Modal>
          </div>
          {this.state.showLightModeOption === false ? (
            <div
              className="profile_page_setting_container"
              ref={(node) => {
                this.node = node;
              }}
            >
              <IosSettings
                onClick={this.showLightingSetting}
                className={
                  this.props.darkmodeEnabled
                    ? "profile_page_setting_button_darkMode"
                    : "profile_page_setting_button"
                }
              />
            </div>
          ) : (
            <div
              className="profile_page_setting_container"
              ref={(node) => {
                this.node = node;
              }}
            >
              <IosSettings
                className={
                  this.props.darkmodeEnabled
                    ? "profile_page_setting_button_darkMode"
                    : "profile_page_setting_button"
                }
              />
              <div className="light-setting-options"></div>
              <div
                className={
                  this.props.darkmodeEnabled
                    ? "light-setting-options-box-darkMode"
                    : "light-setting-options-box"
                }
              >
                <label className="toggle-container">
                  <input
                    type="checkbox"
                    checked={this.props.darkmodeEnabled}
                    onChange={
                      this.props.darkmodeEnabled
                        ? this.props.untoggleDm
                        : this.props.toggleDm
                    }
                  />
                  <span className="slider" />
                </label>
                <div className="darkmode-label">Dark mode</div>
              </div>
            </div>
          )}
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
      darkmodeEnabled,
    } = this.props;
    if (!profileUser || !users) return null;
    return (
      <div
        className={darkmodeEnabled ? "profile-page-darkMode" : "profile-page"}
      >
        <div
          className={
            this.props.darkmodeEnabled
              ? "profile_page_container_darkMode"
              : "profile_page_container"
          }
        >
          <div className="profile_pic_page_container">
            <ProfilePageUploader
              user={profileUser}
              currentUser={loggedInUser}
              profilePicture={profilePicture}
              requestFollows={requestFollows}
            />

            <div
              className={
                this.props.darkmodeEnabled
                  ? "profile_page_information_container_darkMode"
                  : "profile_page_information_container"
              }
            >
              {this.followOption()}

              <ProfilePageInfo
                profileUser={profileUser}
                loggedInUser={loggedInUser}
                posts={posts}
                requestFollows={requestFollows}
                follows={follows}
              />
              {profileUser.username === loggedInUser.username ? (
                <div className="profile_page_name_other">
                  <div>{profileUser.first_name}</div>
                  <div className="profile-bio">{loggedInUser.bio}</div>
                </div>
              ) : (
                <div className="profile_page_name_other">
                  <div>{profileUser.first_name}</div>
                  <div className="profile-bio">{profileUser.bio}</div>
                </div>
              )}
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
      </div>
    );
  }
}

export default ProfilePage;
