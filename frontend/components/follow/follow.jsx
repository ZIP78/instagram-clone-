import React from "react";
import "./follow.css";

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
  }
  follow() {
    let currentUser = this.props.currentUser.id;
    console.log(currentUser);
  }

  unfolow() {
    console.log(this.props.currentUser);
  }

  render() {
    const { currentUser } = this.props;
    let button;
    if (currentUser.followed_by_current_user) {
      button = (
        <button onClick={this.follow} className="following-button">
          Following
        </button>
      );
    } else {
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
        <button onClick={this.follow} className="follow-button">
          Follow
        </button>{" "}
      </div>
    );
  }
}

export default Follow;
