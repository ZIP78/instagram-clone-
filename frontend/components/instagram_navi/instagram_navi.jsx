import React from "react";
import Upload from "../upload/upload_container";
import UploadModal from "./upload_modal";
import IosAdd from "react-ionicons/lib/IosAdd";

import { Link } from "react-router-dom";

class InstagramNavi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    this.setState({
      show: true,
    });
  }

  render() {
    return (
      <div className="insta-navi-container">
        <div className="insta-navi-items">
          <div className="insta-navi-logo">
            <Link to={"/"}>
              <h1 className="insta-navi-name">Whoopiegram</h1>
            </Link>
          </div>

          <div>
            <IosAdd onClick={this.showModal} />
          </div>
          <div>
            <UploadModal show={this.state.show} />
          </div>

          {/* <div className="insta-upload-button">
            <Upload />
          </div> */}
        </div>
      </div>
    );
  }
}

export default InstagramNavi;
