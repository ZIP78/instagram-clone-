import React from "react";
import "./profile_page.css";
import IosSettings from "react-ionicons/lib/IosSettings";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ProfilePageUploader from "./profile_page_uploader";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  numOfPost() {
    let user = this.props.user;
    let posts = Object.values(this.props.posts);
    let postsByUser = posts.filter((post) => post.user_id === user.id);
    debugger;
    return <div className="profile_page_posts">{postsByUser.length} posts</div>;
  }

  postByUser() {
    let user = this.props.user;
    let posts = Object.values(this.props.posts);
    return posts.filter((post) => post.user_id === user.id);
  }

  handleFile(event) {
    this.setState({ photoFile: event.currentTarget.files[0] });
  }
  handleSubmit(event) {
    // left off here
    event.preventDefault();
    const formData = new FormData();
    formData.append("user[photo]", this.state.photoFile);
    this.props.profilePicture(formData);
  }

  handleClick() {
    this.refs.fileUploader.click();
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestAllPost();
  }

  render() {
    const { user, profilePicture } = this.props;
    debugger;
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="file"
            onChange={this.handleFile} //left off here
            ref="fileUploader"
            // accept="image/*"
            style={{ display: "none" }}
          /> */}

        <div className="profile_pic_page_container">
          {/* <div className="profile_page_pic_container">
              <div
                className="profile_page_pic_upload"
                onClick={this.handleClick}
              >
                <img src={user.photoUrl} />
              </div>
            </div> */}
          <ProfilePageUploader user={user} profilePicture={profilePicture} />

          <div className="profile_page_information_container">
            <div className="name_edit_setting_container">
              <div className="profile_page_username">{user.username}</div>
              <div className="profile_page_edit_button_container">
                <button className="profile_page_edit_button">
                  Edit Profile
                </button>
              </div>
              <div className="profile_page_setting_container">
                <IosSettings className="profile_page_setting_button" />
              </div>
            </div>

            <div className="post_followers_container">
              {this.numOfPost()}
              <div className="profile_page_followers">0 followers</div>
              <div className="profile_page_following">0 following</div>
            </div>

            <div className="profile_page_name">
              <div>{user.first_name}</div>
            </div>
          </div>
        </div>
        {/* <button>test</button>
        </form> */}
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
