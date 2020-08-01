import React from "react";
import "./follow.css";

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { following: null };
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

    let following = Object.values(currentUser.following).some(
      (following) => following.followed_user_id === user.id
    );

    // console.log(currentUser.currentFollowing);
    console.log(" current user following objects below");
    console.log(Object.values(currentUser.following));
    console.log(" current user following below boolean below");
    console.log(following);

    if (following) {
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
