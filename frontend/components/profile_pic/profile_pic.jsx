import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.user;
  }

  render() {
    console.log(this.state);
    const { user } = this.props;
    return (
      <div className="bubble">
        <Link
          to={{
            pathname: `/users/${user.username}`,
          }}
        >
          <img className="profile-pic-circle" src={user.photoUrl} />
        </Link>
      </div>
    );
  }
}
export default ProfilePic;
