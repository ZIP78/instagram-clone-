import React from "react";
import Upload from "../upload/upload_container";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <section className="modal-main">
          <div className="modal-title">Upload Photo / Video</div>
          <Upload />
        </section>
      </div>
    );
  }
}

export default UploadModal;
