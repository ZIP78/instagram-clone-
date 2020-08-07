import React from "react";
import "./profile_page.css";

class ProfilePageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    //maybe
    this.props.user;
  }
  componentDidUpdate(prevState, prevProps) {
    if (
      this.state.photoFile !== null &&
      prevProps.photoFile !== this.state.photoFile
    ) {
      const formData = new FormData();
      formData.append("user[photo]", this.state.photoFile);
      // formData.append("user[id]", this.props.user.id);
      this.props.profilePicture(formData);
    }
  }
  handleFile(event) {
    this.setState({ photoFile: event.currentTarget.files[0] });
  }
  handleSubmit(event) {
    const formData = new FormData();
    formData.append("user[photo]", this.state.photoFile);
    this.props.profilePicture(formData);
  }

  handleClick() {
    this.refs.fileUploader.click();
  }

  render() {
    const { user, currentUser } = this.props;
    if (!user) return null;
    return currentUser.username !== user.username ? (
      <div>
        <div className="profile_page_pic_container">
          <div className="profile_page_pic_upload">
            <img className="profile_page_profile_pic" src={user.photoUrl} />
          </div>
        </div>
      </div>
    ) : (
      <div>
        <input
          type="file"
          onChange={this.handleFile}
          ref="fileUploader"
          style={{ display: "none" }}
        />

        <div className="profile_page_pic_container">
          <div className="profile_page_pic_upload" onClick={this.handleClick}>
            <img className="profile_page_profile_pic" src={user.photoUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePageUploader;
