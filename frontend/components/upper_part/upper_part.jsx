import React from "react";
import { Link } from "react-router-dom";

class UpperPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.user);

    const { user, post, comments } = this.props;
    if (!user) return null;
    // debugger;
    return (
      <div className="post-upper-part">
        <Link
          to={{
            pathname: `/users/${user["username"]}`,
          }}
        >
          <div className="post-profile-icon-container">
            <img
              className="post-profile-icon"
              src={user["photoUrl"]}
              alt="profile-image"
            />
          </div>
          <div className="post-user" style={{ position: "relative", top: -12 }}>
            {user["username"]}
          </div>
        </Link>
        {/* <FontAwesomeIcon className="post-ellipsh" icon={faEllipsisH} /> */}
      </div>
    );
  }
}

export default UpperPart;
