import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { requestAllPost } from "../../actions/post";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    user: state.entities.users[state.session.id],
    posts: state.entities.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPost: () => dispatch(requestAllPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
