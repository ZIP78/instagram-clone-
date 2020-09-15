import React from "react";
import "./post_detail.css";
import VideoPlayer from "react-video-js-player";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import LikeComment from "../icons/like_comment";
import CommentForm from "../comment/comment_form_container";
import { Link } from "react-router-dom";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
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
    const { post, users, likePost, removeLike, darkmodeEnabled } = this.props;
    if (Object.keys(users).length === 0 || Object.keys(post).length === 0)
      return null;

    return (
      <div className={darkmodeEnabled ? "post-show-darkMode" : "post-show"}>
        <div className="post-show-container">
          {post.photoUrl.split(".").pop() === "mp4" ? (
            <VideoPlayer
              className="instagram-show-post-video"
              src={post.photoUrl}
            />
          ) : (
            <img className="instagram-show-post" src={post.photoUrl} />
          )}

          <div
            className={
              darkmodeEnabled
                ? "show-post-upper-part-darkMode"
                : "show-post-upper-part"
            }
          >
            <div className="insta-profile-icon"></div>
            <FontAwesomeIcon className="post-show-ellipsh" icon={faEllipsisH} />
            <div
              className="post-user"
              style={{
                position: "relative",
                top: 11,
                marginLeft: 19,
                left: 15,
              }}
            >
              {users[post.user_id]["username"]}
            </div>
            <Link
              to={{ pathname: `/users/${users[post.user_id]["username"]}` }}
            >
              <img
                style={{ top: 21, left: 21 }}
                className="post-profile-icon"
                src={users[post.user_id]["photoUrl"]}
                alt="profile-image"
              />
            </Link>

            <div
              className={
                darkmodeEnabled
                  ? "show-post-comments-container-darkMode"
                  : "show-post-comments-container"
              }
            >
              <div className="show-caption-section">
                <div className="user-caption-container">
                  <div
                    className="post-user"
                    style={{
                      position: "relative",
                      top: 0,
                      marginLeft: 23,
                      left: -25,
                    }}
                  >
                    {users[post.user_id]["username"]}
                  </div>
                  <img
                    style={{ top: -1, left: -54 }}
                    className="post-profile-icon"
                    src={users[post.user_id]["photoUrl"]}
                    alt="profile-image"
                  />

                  <div className="comment">{post.body}</div>
                </div>

                <div className="insta-likes-container-time-test">
                  <Moment
                    fromNow
                    className={
                      darkmodeEnabled
                        ? "time-single-post-darkMode"
                        : "time-single-post"
                    }
                  >
                    {post.created_at}
                  </Moment>
                </div>
              </div>

              <div className="show-post-comments">
                {this.comments().map((comment) => (
                  <div className="single-page-comments">
                    <div
                      className="post-user"
                      style={{
                        position: "relative",
                        top: 0,
                        marginLeft: 23,
                        left: -25,
                      }}
                    >
                      {users[post.user_id]["username"]}
                    </div>

                    <img
                      style={{ top: 11, left: -39 }}
                      className="post-profile-icon"
                      src={users[post.user_id]["photoUrl"]}
                      alt="profile-image"
                    />

                    <div className="comment">{comment.body}</div>
                    <Moment fromNow ago className="time-single-comment">
                      {comment.created_at}
                    </Moment>
                  </div>
                ))}
              </div>

              <div
                className={
                  darkmodeEnabled
                    ? "show-interactive-icons-darkMode"
                    : "show-interactive-icons"
                }
              >
                <LikeComment
                  post={post}
                  likePost={likePost}
                  removeLike={removeLike}
                  darkmodeEnabled={darkmodeEnabled}
                />
                <div className="insta-show-likes-container">
                  <h1>{post.likes} likes</h1>
                </div>

                <div className="insta-show-time-container">
                  <Moment
                    className={
                      darkmodeEnabled
                        ? "post-show-bottom-time-darkMode"
                        : "post-show-bottom-time"
                    }
                    format="MMM D YYYY"
                    withTitle
                  >
                    {post.created_at.toUpperCase()}
                  </Moment>
                </div>
                <div className="insta-post-container-comment">
                  <CommentForm post={post} width={308} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
