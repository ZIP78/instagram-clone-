import { connect } from "react-redux";
import MainPage from "./main_page";
import { logout, requestUsers } from "../../actions/session";
import { requestAllPost, likePost, removeLike } from "../../actions/post";
import { getComments } from "../../actions/comment";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    users: state.entities.users,
    posts: state.entities.posts,
    comments: state.entities.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    requestUsers: () => dispatch(requestUsers()),
    logout: () => dispatch(logout()),
    requestAllPost: () => dispatch(requestAllPost()),
    getComments: () => dispatch(getComments()),
    likePost: (postId) => dispatch(likePost(postId)),
    removeLike: (id) => dispatch(removeLike(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
