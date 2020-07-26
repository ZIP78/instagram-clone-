import React from "react";
import "./suggestion.css";
import { Link } from "react-router-dom";

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unFollow = this.unFollow.bind(this);
  }

  follow(user) {
    this.props.follow(user);
  }

  unFollow(user) {
    this.props.unFollow(user);
  }

  render() {
    const { users, loggedInUser } = this.props;
    if (!users || !loggedInUser) {
      return null;
    }

    debugger;
    let loggedInUserFollowing = Object.values(loggedInUser.following).map(
      (following) => {
        return following.followed_user_id;
      }
    );

    let suggestedFollowing = Object.values(users).filter((user) => {
      if (!loggedInUserFollowing.includes(user.id)) {
        return user;
      }
    });
    // .map((user) => {
    //   return (
    //     <div className="suggested-user-container">
    //       <Link
    //         to={{
    //           pathname: `/users/${user.username}`,
    //         }}
    //       >
    //         <div style={{ position: "relative" }}>
    //           <img className="search-profile-icon" src={user.photoUrl} />
    //         </div>{" "}
    //         <div className="suggested-username">{user.username}</div>{" "}
    //       </Link>
    //       {!loggedInUser ? (
    //         <div className="suggestions-follow">Follow</div>
    //       ) : (
    //         <div className="suggestions-follow">Following</div>
    //       )}
    //     </div>
    //   );
    // });
    return (
      <div className="whole-container">
        <h1 className="suggestion-caption">Suggestions For You</h1>
        {/* <div className="suggestions-container">{suggestedFollowing}</div> */}
        <div className="suggestions-container">
          {suggestedFollowing.map((user) => {
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
                  <div className="suggested-username">{user.username}</div>{" "}
                </Link>
                {!suggestedFollowing ? (
                  <div
                    onClick={this.unFollow(user.id)}
                    className="suggestions-follow"
                  >
                    Following
                  </div>
                ) : (
                  <div
                    onClick={this.follow(user.id)}
                    className="suggestions-follow"
                  >
                    follow
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Suggestion;
