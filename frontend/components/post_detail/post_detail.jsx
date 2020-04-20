import React from "react";
import "./post_detail.css";
import VideoPlayer from "react-video-js-player";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import Moment from "react-moment";
import LikeComment from "../icons/like_comment";
import CommentForm from "../comment/comment_form_container";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestPost(this.props.match.params.postId);
    this.props.getComments();
    this.props.requestUsers();
  }

  comments() {
    let comments = Object.values(this.props.comments);
    return comments.filter((comment) => comment.post_id === this.props.post.id);
  }

  render() {
    const { post, currentUser, likePost, removeLike } = this.props;
    if (!post) return null;
    return (
      <div className="post-show-container">
        {post.photoUrl.split(".").pop() === "mp4" ? (
          <VideoPlayer
            className="instagram-show-post-video"
            src={post.photoUrl}
          />
        ) : (
          <img className="instagram-show-post" src={post.photoUrl} />
        )}

        <div className="show-post-upper-part">
          <div className="insta-profile-icon"></div>
          <FontAwesomeIcon className="post-show-ellipsh" icon={faEllipsisH} />
          <div className="show-profile-name">
            {currentUser[post.user_id]["username"]}
          </div>

          <div className="show-post-comments-container">
            <div className="show-caption-section">
              <div className="user-caption-container">
                <div className="comment-user">
                  {currentUser[post.user_id]["username"]}
                </div>
                <div className="comment">{post.body}</div>
              </div>

              <div className="insta-likes-container-time-test">
                <Moment fromNow className="time-single-post">
                  {post.created_at}
                </Moment>
              </div>
            </div>

            <div className="show-post-comments">
              {this.comments().map((comment) => (
                <div className="single-page-comments">
                  <div className="comment-user">
                    {currentUser[comment.user_id]["username"]}
                  </div>

                  <div className="comment">{comment.body}</div>
                  <Moment fromNow ago className="time-single-comment">
                    {comment.created_at}
                  </Moment>
                </div>
              ))}
            </div>

            <div className="show-interactive-icons">
              <LikeComment
                post={post}
                likePost={likePost}
                removeLike={removeLike}
              />
              <div className="insta-show-likes-container">
                <h1>{post.likes} likes</h1>
              </div>

              <div className="insta-show-time-container">
                <Moment
                  className="post-show-bottom-time"
                  format="MMM D YYYY"
                  withTitle
                >
                  {post.created_at.toUpperCase()}
                </Moment>
              </div>
              <div className="insta-post-container-comment">
                <CommentForm post={post} width={308} left={11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;

// 308 width
