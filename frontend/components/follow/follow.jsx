import React from "react";
import "./follow.css";

class Follow extends React.Component {
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
    const { user, currentUser } = this.props;
    let button;

    let following = currentUser.following.some(
      (following) => following.followed_user_id === user.id
    );

    if (currentUser.followed_by_current_user) {
      console.log("followed but will now unfolow if clicked ");
      button = (
        <button onClick={this.unFollow} className="following-button">
          Following
        </button>
      );
    } else {
      console.log("start to follow if clicked ");
      button = (
        <button onClick={this.follow} className="follow-button">
          Follow
        </button>
      );
    }
    debugger;
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
