import React from "react";
import "./profile_page.css";

class ProfilePageInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollows();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      Object.values(this.props.loggedInUser.following).length !==
        Object.values(prevProps.loggedInUser.following).length ||
      Object.values(this.props.profileUser.following).length !==
        Object.values(prevProps.profileUser.following).length
    ) {
      this.props.requestFollows();
    }
  }

  render() {
    const { loggedInUser, profileUser, posts } = this.props;

    if (!loggedInUser || !profileUser) return null;

    let postsByUser;
    let followers;
    let profileInfo;
    if (profileUser.username === loggedInUser.username) {
      postsByUser = Object.values(posts).filter(
        (post) => post.user_id === loggedInUser.id
      );

      followers = Object.values(this.props.follows).filter((follow) => {
        return follow.followed_user_id === loggedInUser.id;
      });

      profileInfo = (
        <div className="profile_page_detail_container_other">
          <div className="post_followers_container">
            <div className="profile_page_posts">{postsByUser.length} posts</div>
            <div className="profile_page_followers">
              {" "}
              {followers.length} followers
            </div>
            <div className="profile_page_following">
              {Object.values(loggedInUser.following).length} Following
            </div>
          </div>
        </div>
      );
    } else {
      postsByUser = Object.values(posts).filter(
        (post) => post.user_id === profileUser.id
      );

      followers = Object.values(this.props.follows).filter((follow) => {
        return follow.followed_user_id === profileUser.id;
      });

      profileInfo = (
        <div className="profile_page_detail_container_other">
          <div className="post_followers_container">
            <div className="profile_page_posts">{postsByUser.length} posts</div>
            <div className="profile_page_followers">
              {followers.length} followers
            </div>
            <div className="profile_page_following">
              {Object.values(profileUser.following).length} Following
            </div>
          </div>
        </div>
      );
    }

    return <div style={{ display: "contents" }}>{profileInfo}</div>;
  }
}

export default ProfilePageInfo;
