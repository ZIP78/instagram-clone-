import React from "react";
import UploadModal from "./upload_modal";
import IosAdd from "react-ionicons/lib/IosAdd";
import IosLogOut from "react-ionicons/lib/IosLogOut";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ProfilePicture from "../profile_pic/profile_container";

class InstagramNavi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  componentDidMount() {
    this.props.user;
  }

  handleClick() {
    this.setState({
      show: true,
    });
  }

  outsideClick() {
    this.setState({
      show: false,
    });
  }

  render() {
    const { logout } = this.props;
    return (
      <div className="insta-navi-container">
        <div className="insta-navi-items">
          <div className="insta-navi-logo">
            <Link to={"/"}>
              <h1 className="insta-navi-name">Whoopiegram</h1>
            </Link>
          </div>

          <div>
            <IosAdd className="upload-button" onClick={this.handleClick} />

            <Modal
              className="Modal"
              overlayClassName="Overlay"
              isOpen={this.state.show}
              onRequestClose={this.outsideClick}
            >
              <UploadModal />
            </Modal>

            <IosLogOut
              className="logout-button"
              fontSize="37"
              color="black"
              onClick={logout}
            />
            <ProfilePicture user={currentUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default InstagramNavi;
