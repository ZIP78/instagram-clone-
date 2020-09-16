import React from "react";
import Upload from "../upload/upload_container";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { darkmodeEnabled } = this.props;
    return (
      <section>
        <div
          className={
            darkmodeEnabled
              ? "modal-title-container-darkMode"
              : "modal-title-container"
          }
        >
          <div className="modal-title">Upload Here</div>
        </div>
        <Upload darkmodeEnabled={darkmodeEnabled} />
      </section>
    );
  }
}

export default UploadModal;
