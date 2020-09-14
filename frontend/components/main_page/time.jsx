import React from "react";
import Moment from "react-moment";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.post.created_at,
    };
  }
  render() {
    return (
      <div
        className={
          this.props.darkmodeEnabled ? "time-post-darkMode" : "time-post"
        }
      >
        <Moment fromNow>{this.state.time}</Moment>
      </div>
    );
  }
}

export default Time;
