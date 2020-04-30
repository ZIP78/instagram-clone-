import React from "react";
import { Link } from "react-router-dom";
import './profile.css'

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
      src: "",
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.user
  }

  handleFile(e) {
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append("user[photo]", this.state.photoFile);
    }

    // create profile method
    this.props.profilePicture(formData);
    // set state
    this.setState({ photoUrl: null });
  }

  // add a submit photo
  // handlePhoto(e) {
  //   e.preventDefault();
  //   let photoInput = document.getElementById("photo-input");
  //   if (photoInput.files[0]) {
  //     const formData = new FormData();
  //     const uploadFile = photoInput.files[0];
  //     formData.append("profilePicture", uploadFile);
  //   }
  // }

  render() {
    console.log(this.state);
    const { user } = this.props
    debugger
    return (
      <div className="bubble">
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="file"
            onChange={this.handleFile}
            id="photo-input"
            name="profilePicture"
            // accept="image/png, image/jpeg"
          />
          <button>test upload</button>
        </form> */}
        <Link to={{
          pathname: `/users/${user.username}`,
        }}>
          <img className="profile-pic-circle" src={user.photoUrl} />

        </Link>

        {/* <div> */}
        {/* </div> */}
      </div>
    );
  }
}
export default ProfilePic;
