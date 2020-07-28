import React from "react";
import "./suggestion.css";
import { Link } from "react-router-dom";
import SuggestionUser from "./suggestion_user";

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, loggedInUser, follow, unFollow, path } = this.props;
    if (!users || !loggedInUser) {
      return null;
    }

    let loggedInUserFollowing = Object.values(loggedInUser.following).map(
      (following) => {
        return following.followed_user_id;
      }
    );

    let suggestedFollowing = Object.values(users).filter((user) => {
      if (
        (!loggedInUserFollowing.includes(user.id) ||
          loggedInUserFollowing.includes(user.id)) &&
        user.id !== loggedInUser.id &&
        path === "/" &&
        !loggedInUserFollowing.includes(user.id)
      ) {
        return user;
      }
    });
    console.log(suggestedFollowing);
    console.log(" suggestfollowing above");

    console.log(loggedInUserFollowing);

    // suggestedFollowing.map((user) => {
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
    //       {!following(user) ? (
    //         <div
    //           onClick={() => this.props.follow(user.id)}
    //           className="suggestions-follow"
    //         >
    //           Follow
    //         </div>
    //       ) : (
    //         <div
    //           style={{ color: "black" }}
    //           onClick={() => this.props.unFollow(user.id)}
    //           className="suggestions-follow"
    //         >
    //           Following
    //         </div>
    //       )}
    //     </div>
    //   );
    // });
    return (
      <div className="whole-container">
        <h1 className="suggestion-caption">Suggestions For You</h1>

        <div className="suggestions-container">
          {suggestedFollowing.map((user) => {
            return (
              <SuggestionUser
                user={user}
                follow={follow}
                unFollow={unFollow}
                loggedInUser={loggedInUser}
              />
              // <div className="suggested-user-container">
              //   <Link
              //     to={{
              //       pathname: `/users/${user.username}`,
              //     }}
              //   >
              //     <div style={{ position: "relative" }}>
              //       <img className="search-profile-icon" src={user.photoUrl} />
              //     </div>{" "}
              //     <div className="suggested-username">{user.username}</div>{" "}
              //   </Link>
              //   {!following(user.id) ? (
              //     <div
              //       onClick={() => this.followuser(user.id)}
              //       className="suggestions-follow"
              //     >
              //       Follow
              //     </div>
              //   ) : (
              //     <div
              //       style={{ color: "black" }}
              //       onClick={() => this.unFollowuser(user.id)}
              //       className="suggestions-follow"
              //     >
              //       Following
              //     </div>
              //   )}
              // </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Suggestion;
