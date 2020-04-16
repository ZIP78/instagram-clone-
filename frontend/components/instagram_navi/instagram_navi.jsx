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
    // this.showModal = this.showModal.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  // showModal(e) {
  //   this.setState({
  //     show: true,
  //   });
  // }

  handleClick() {
    if (!this.state.show) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return
    }
    this.handleClick()
  }

  render() {
    return (
      <div className="insta-navi-container" ref={node => { this.node = node; }}>
        <div className="insta-navi-items">
          <div className="insta-navi-logo">
            <Link to={"/"}>
              <h1 className="insta-navi-name">Whoopiegram</h1>
            </Link>
          </div>

          <div>
            <IosAdd onClick={this.handleClick} />
          </div>
          <div>
            {this.state.show && (<UploadModal show={this.state.show} />)}
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
