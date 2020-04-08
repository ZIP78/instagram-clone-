import React from "react";
import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  viewMoreComments() {
    let comments = Object.values(this.props.comments);
    let postComments = comments.filter(
      (comment) => comment.post_id === this.props.post.id
    );
    if (postComments.length >= 3) {
      return (
        <Link to={`posts/${this.props.post.id}`}>
          <h1 className="view-all">View all {postComments.length} comments</h1>
        </Link>
      );
    }
  }

  comments() {
    let comments = Object.values(this.props.comments);
    return comments.filter((comment) => comment.post_id === this.props.post.id);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="insta-likes-container-test">
        {this.viewMoreComments()}
        {this.comments()
          .slice(0, 2)
          .map((comment) => (
            <div className="comments">
              <div className="comment-user">
                {user[comment.user_id]["username"]}
              </div>

              <div className="comment">{comment.body}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default CommentIndex;
