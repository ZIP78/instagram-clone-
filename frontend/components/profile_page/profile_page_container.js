import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { requestAllPost } from "../../actions/post";
import { requestUsers, profilePicture } from "../../actions/session";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    user: state.entities.users,
    posts: state.entities.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPost: () => dispatch(requestAllPost()),
    requestUsers: () => dispatch(requestUsers()),
    profilePicture: (pic) => dispatch(profilePicture(pic)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
