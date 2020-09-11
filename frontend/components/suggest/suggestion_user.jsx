import React from "react";
import "./suggestion.css";
import { Link } from "react-router-dom";

class SuggestionUser extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unFollow = this.unFollow.bind(this);
  }

  follow() {
    let user = this.props.user.id;
    this.props.follow(user);
  }

  unFollow() {
    let user = this.props.user.id;
    this.props.unFollow(user);
  }

  render() {
    const { user, loggedInUser } = this.props;

    if (!user || !loggedInUser) {
      return null;
    }
    let following = Object.values(loggedInUser.following).some(
      (following) => following.followed_user_id === user.id
    );

    return (
      <div className="suggested-user-container">
        <Link
          to={{
            pathname: `/users/${user.username}`,
          }}
        >
          <div style={{ position: "relative" }}>
            <img className="search-profile-icon" src={user.photoUrl} />
          </div>{" "}
          <div
            className={
              this.props.darkmodeEnabled
                ? "suggested-username-darkMode"
                : "suggested-username"
            }
          >
            {user.username}
          </div>{" "}
        </Link>
        {!following ? (
          <div onClick={this.follow} className="suggestions-follow">
            Follow
          </div>
        ) : (
          <div
            style={{ color: "black" }}
            onClick={this.unFollow}
            className="suggestions-follow"
          >
            Following
          </div>
        )}
      </div>
    );
  }
}

export default SuggestionUser;
