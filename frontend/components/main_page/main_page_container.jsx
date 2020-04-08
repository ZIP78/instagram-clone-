import { connect } from "react-redux";
import MainPage from "./main_page";
import { logout, requestUsers } from "../../actions/session";
import { requestAllPost, likePost, removeLike } from "../../actions/post";
import { getComments } from "../../actions/comment";

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.entities.posts,
    comments: state.entities.comments,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    requestAllPost: () => dispatch(requestAllPost()),
    getComments: () => dispatch(getComments()),
    likePost: (postId) => dispatch(likePost(postId)),
    removeLike: (id) => dispatch(removeLike(id)),
    requestUsers: () => dispatch(requestUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
