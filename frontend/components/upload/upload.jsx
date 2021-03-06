import React from "react";
import VideoThumbnail from "react-video-thumbnail";

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
    this.setState({ photoUrl: null });
  }

  render() {
    const { darkmodeEnabled } = this.props;
    let display;
    const preview = this.state.photoUrl;
    if (preview && this.state.photoFile.name.split(".").pop() === "mp4") {
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
          className={darkmodeEnabled ? "upload-darkMode" : ""}
          type="file"
          style={{ width: "256", height: "22px", marginTop: "8px" }}
          onChange={this.handleFile}
          onClick={(e) => (e.target.value = null)}
        />
      );
    }

    return (
      <form
        className={darkmodeEnabled ? "upload-form-darkMode" : "upload-form"}
        onSubmit={this.handleSubmit}
      >
        {display}
        <input
          className={
            darkmodeEnabled ? "write-caption-darkMode" : "write-caption"
          }
          placeholder="Write a caption..."
          type="text"
          onChange={this.handleInput}
          value={this.state.body}
        />

        <button
          className={
            darkmodeEnabled
              ? "create-post-button-darkMode"
              : "create-post-button"
          }
        >
          Share
        </button>
      </form>
    );
  }
}

export default Upload;
