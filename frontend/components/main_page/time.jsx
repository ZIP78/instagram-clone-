import React from "react";
import Moment from "react-moment";
import TimeAgo from "react-timeago";

class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.props.post.created_at
        }
    }
  render() {
      const {post} = this.props
    return (
      <div className="time-post">
            <Moment fromNow>{this.state.time}</Moment>
      </div>
    );
  }
}

export default Time

