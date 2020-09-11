import React from "react";
import UploadModal from "./upload_modal";
import IosAdd from "react-ionicons/lib/IosAdd";
import IosLogOut from "react-ionicons/lib/IosLogOut";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ProfilePicture from "../profile_pic/profile_container";
import SearchBar from "../search_bar/search_bar";

class InstagramNavi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
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
    const { logout, user, users } = this.props;
    return (
      <div
        className={
          this.props.darkmodeEnabled
            ? "insta-navi-container-darkMode"
            : "insta-navi-container"
        }
      >
        <div className="insta-navi-items">
          <div className="insta-navi-logo">
            <Link to={"/"}>
              <h1
                className={
                  this.props.darkmodeEnabled
                    ? "insta-navi-name-darkMode"
                    : "insta-navi-name"
                }
              >
                Whoopiegram
              </h1>
            </Link>
          </div>
          <SearchBar
            darkmodeEnabled={this.props.darkmodeEnabled}
            users={users}
          />
          <div>
            <IosAdd
              className={
                this.props.darkmodeEnabled
                  ? "upload-button-darkMode"
                  : "upload-button"
              }
              onClick={this.handleClick}
            />

            <Modal
              className="Modal"
              overlayClassName="Overlay"
              isOpen={this.state.show}
              onRequestClose={this.outsideClick}
            >
              <UploadModal />
            </Modal>

            <IosLogOut
              className={
                this.props.darkmodeEnabled
                  ? "logout-button-darkMode"
                  : "logout-button"
              }
              fontSize="37"
              color="black"
              onClick={logout}
            />
            <ProfilePicture user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default InstagramNavi;
