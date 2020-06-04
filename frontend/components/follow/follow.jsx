import React from "react";
import "./follow.css";

class Follow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="follow-button-container"
        style={{ width: 93, height: 28 }}
      >
        <button className="follow-button">Follow</button>
      </div>
    );
  }
}

export default Follow;
