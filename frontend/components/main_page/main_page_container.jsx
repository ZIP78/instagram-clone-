import { connect } from "react-redux";
import MainPage from "./main_page";
import { logout, requestUsers } from "../../actions/session";
import { requestAllPost, likePost, removeLike } from "../../actions/post";
import { getComments } from "../../actions/comment";
import { requestFollowingByUser } from "../../actions/follow";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    posts: state.entities.posts,
    comments: state.entities.comments,
    loggedInUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
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
