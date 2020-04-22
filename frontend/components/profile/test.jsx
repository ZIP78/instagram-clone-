import React from "react";
import Avatar from "react-avatar-edit";

class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      src: "",
    };
  }

  // add a submit photo

  render() {
    return (
      <div>
        <form>
          <input type="file" accept="image/png, image/jpeg" />
          <button>test upload</button>
        </form>
      </div>
    );
  }
}
export default ProfilePic;
