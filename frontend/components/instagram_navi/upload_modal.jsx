import React from "react";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return <div className="modal">Upload Photo / Video</div>;
  }
}

export default UploadModal;
