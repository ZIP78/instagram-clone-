import { connect } from "react-redux";
import ProfilePic from "./profile_pic";

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePic);
