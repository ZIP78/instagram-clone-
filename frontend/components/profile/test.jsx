import React from "react";
import Avatar from "react-avatar-edit";

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      src: "",
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.setState({ preview: null });
  }

  onCrop() {
    this.setState({
      preview,
    });
  }

  render() {
    return <div>need profile icon</div>;
  }
}
export default ProfilePic;
