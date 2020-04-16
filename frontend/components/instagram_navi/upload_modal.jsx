import React from "react";
import Upload from "../upload/upload_container";

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modalVisibility: false
    }
    // this.handleClick = this.handleClick.bind(this)
    // this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  // handleClick() {
  //   if (!this.state.modalVisibility) {
  //     document.addEventListener('click', this.handleOutsideClick, false)
  //   } else {
  //     document.removeEventListener('click', this.handleOutsideClick, false)
  //   }
  //   this.setState(prevState => ({
  //     modalVisibility: !prevState.modalVisibility
  //   }))
  // }

  // handleOutsideClick(e) {
  //   if (this.node.contains(e.target)) {
  //     return
  //   }
  //   this.handleClick()
  // }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <section className="modal-main">
          <div className="modal-title-container">
            <div className="modal-title">Upload Here</div>
          </div>
          <Upload />
        </section>
      </div>
    );
  }
}

export default UploadModal;
