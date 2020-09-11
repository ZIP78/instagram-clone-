import React from "react";
import "./suggestion.css";
import { Link } from "react-router-dom";
import SuggestionUser from "./suggestion_user";

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      users,
      loggedInUser,
      follow,
      unFollow,
      path,
      unfollowedUsers,
      darkmodeEnabled,
    } = this.props;
    if (!users || !loggedInUser || unfollowedUsers.length === 0) {
      return null;
    }

    return (
      <div className="whole-container">
        <div className="suggestions-container">
          <h1
            className={
              this.props.darkmodeEnabled
                ? "suggestion-caption-darkMode"
                : "suggestion-caption"
            }
          >
            Suggestions For You
          </h1>

          {unfollowedUsers.map((user) => {
            return (
              <SuggestionUser
                key={user.id}
                user={user}
                follow={follow}
                unFollow={unFollow}
                loggedInUser={loggedInUser}
                darkmodeEnabled={darkmodeEnabled}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Suggestion;
