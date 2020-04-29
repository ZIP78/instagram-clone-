import { connect } from "react-redux";
import ProfilePic from "./profile_pic";
import { profilePicture } from "../../actions/session";

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(null, mapDispatchToProps)(ProfilePic);
