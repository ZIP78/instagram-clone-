import React from "react";
import Upload from "../upload/upload_container";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <div className="modal-title-container">
          <div className="modal-title">Upload Here</div>
        </div>
        <Upload />
      </section>
    );
  }
}

export default UploadModal;
