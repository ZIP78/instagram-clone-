import React from "react";
import VideoPlayer from "react-video-js-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import CommentForm from "../comment/comment_form_container";
import CommentIndex from "../comment/comment_index";
import LikeComment from "../icons/like_comment";
import Time from "./time";
import { Link } from "react-router-dom";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getComments();
  }

  render() {
    const {
      posts,
      comments,
      users,
      likePost,
      removeLike,
      getComments,
    } = this.props;
    debugger;
    return (
      <div className="post-container">
        {Object.values(posts).map((post) => {
          return (
            <div className="individual-post">
              <div className="post-upper-part">
                <Link
                  to={{
                    pathname: `/users/${users[post.user_id]["username"]}`,
                  }}
                >
                  <div className="post-profile-icon-container">
                    <img
                      className="post-profile-icon"
                      src={users[post.user_id]["photoUrl"]}
                      alt="profile-image"
                    />
                  </div>
                  <div
                    className="post-user"
                    style={{ position: "relative", top: -12 }}
                  >
                    {users[post.user_id]["username"]}
                  </div>
                </Link>
                <FontAwesomeIcon className="post-ellipsh" icon={faEllipsisH} />
              </div>
              <div className="post-middle-part">
                {post.photoUrl.split(".").pop() === "mp4" ? (
                  <VideoPlayer className="instagram-post" src={post.photoUrl} />
                ) : (
                  <img className="instagram-post" src={post.photoUrl} />
                )}
              </div>
              <div className="post-bottom-part">
                <LikeComment
                  post={post}
                  likePost={likePost}
                  removeLike={removeLike}
                  comments={comments}
                />
                <div className="insta-likes-container">
                  <h1>{post.likes} likes</h1>
                </div>

                <div className="insta-likes-container">
                  <div className="post-user">
                    {users[post.user_id]["username"]}
                  </div>

                  <div className="post-caption" style={{ left: -3 }}>
                    {post.body}
                  </div>
                </div>

                <CommentIndex
                  post={post}
                  user={users}
                  comments={comments}
                  getComments={getComments}
                />

                <div className="insta-likes-container-time-test">
                  <Time post={post} />
                </div>

                <div className="insta-likes-container-comment">
                  <CommentForm post={post} width={547} left={0} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostIndex;
