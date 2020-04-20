import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment, deleteComment } from "../../actions/comment";

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
