import React from "react";
import Avatar from "react-avatar-edit";

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

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="file"
            onChange={this.handleFile}
            id="photo-input"
            name="profilePicture"
            // accept="image/png, image/jpeg"
          />
          <button>test upload</button>
        </form>
      </div>
    );
  }
}
export default ProfilePic;
