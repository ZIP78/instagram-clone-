import { connect } from "react-redux";
import PostDetail from "./post_detail";
import { requestPost } from "../../actions/post";
import { getComments } from "../../actions/comment";
import { likePost, removeLike } from "../../actions/post";

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId],
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    requestPost: (id) => dispatch(requestPost(id)),
    getComments: () => dispatch(getComments()),
    likePost: (postId) => dispatch(likePost(postId)),
    removeLike: (id) => dispatch(removeLike(id)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(PostDetail);
