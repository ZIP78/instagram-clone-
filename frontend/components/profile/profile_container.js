import { connect } from "react-redux";
import ProfilePic from "./profile_pic";
import { profilePicture } from "../../actions/session";

const mapStateToProps = (state) => {
  // debugger
  return {
    user: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePic);
