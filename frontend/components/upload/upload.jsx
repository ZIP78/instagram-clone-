import React from "react";
import VideoThumbnail from "react-video-thumbnail";
import VideoPlayer from "react-video-js-player";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      photoFile: null,
      photoUrl: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[body]", this.state.body);
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
    }

    this.props.createPost(formData);
    this.setState({ body: "" });
    this.setState({ photoUrl: null })
  }

  render() {
    console.log(this.state);
    let display;
    const preview = this.state.photoUrl;
    if (preview && this.state.photoFile.name.split(".").pop() === 'mp4') {
      display = (
        <VideoThumbnail
          width={200}
          height={169}
          className="image-preview"
          videoUrl={preview}
        />
      );
    } else if (preview) {
      display = <img className="image-preview" src={this.state.photoUrl} />;
    } else {
      display = (
        <input
          type="file"
          style={{ width: "196px", height: "100px", marginTop: "10px" }}
          onChange={this.handleFile}
          onClick={(e) => (e.target.value = null)}
        />
      );
    }
    return (
      <form className="upload-form" onSubmit={this.handleSubmit}>
        {display}
        <input
          className="write-caption"
          placeholder="Write a caption..."
          type="text"
          onChange={this.handleInput}
          value={this.state.body}
        />


        <button className="create-post-button">Share</button>
        {/* come back here  */}
      </form>
    );
  }
}

export default Upload;
