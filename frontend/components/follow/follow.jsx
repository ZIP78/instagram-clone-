import React from "react";
import "./follow.css";

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
    this.unFollow = this.unFollow.bind(this);
  }
  follow() {
    let currentUser = this.props.loggedInUser.id;
    this.props.follow(currentUser);
  }

  unFollow() {
    let currentUser = this.props.loggedInUser.id;
    this.props.unFollow(currentUser);
  }

  render() {
    const { loggedInUser } = this.props;
    let button;
    if (loggedInUser.followed_by_current_user) {
      console.log("followed but will now unfolow");
      button = (
        <button onClick={this.unFollow} className="following-button">
          Following
        </button>
      );
    } else {
      console.log("start to follow");
      button = (
        <button onClick={this.follow} className="follow-button">
          Follow
        </button>
      );
    }
    return (
      <div
        className="follow-button-container"
        style={{ width: 93, height: 28 }}
      >
        {button}
      </div>
    );
  }
}

export default Follow;
