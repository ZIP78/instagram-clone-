import React from 'react'
import './post_detail.css'
import VideoPlayer from "react-video-js-player";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import Moment from "react-moment";
import Time from '../main_page/time'





class PostDetail extends React.Component {
    
    constructor(props) {
        super(props)
                this.state = {

        };
    }

    componentDidMount() {
      this.props.requestPost(this.props.match.params.postId)
      this.props.getComments()
    }

  comments() {
    let comments = Object.values(this.props.comments);
    return comments.filter(comment => comment.post_id === this.props.post.id);
  }

                   
    render() {
        const {post, currentUser} = this.props
        if (!post) return null
        debugger
        return (
          <div className="post-show-container">
            {post.photoUrl.split(".").pop() === "mp4" ? (
              <VideoPlayer
                className="instagram-show-post-video"
                src={post.photoUrl}
              />
            ) : (
              <img
                className="instagram-show-post"
                src={post.photoUrl}
              />
            )}

            <div className="show-post-upper-part">
              <div className="insta-profile-icon"></div>
              <FontAwesomeIcon
                className="post-show-ellipsh"
                icon={faEllipsisH}
              />
              <div className="show-profile-name">
                {currentUser["username"]}
              </div>

              <div className="show-post-comments-container">
                <div className="show-caption-section">

                  <div className="user-caption-container">
                    <div className="comment-user">
                      {currentUser["username"]}
                    </div>
                    <div className="comment">{post.body}</div>
                  </div>

                  <div className="insta-likes-container-time-test">
                    <Moment fromNow ago className="time-single-post">{post.created_at}</Moment>
                  </div>
                </div>

                <div className="show-post-comments">
                  {this.comments()
                    .map(comment => (
                      <div className="comments">
                        <div className="comment-user">
                          {currentUser["username"]}
                        </div>

                        <div className="comment">{comment.body}</div>
                      </div>
                    ))}
                </div>

                <div className="show-interactive-icons">
                  <FontAwesomeIcon className="heart-icon" icon={faHeart} />
                  <FontAwesomeIcon className="comment-icon" icon={faComment} />
                  <div className="insta-show-likes-container">
                    <h3>Likes here</h3>
                  </div>

                  <div className="insta-show-time-container">
                    <h3>Time posted here</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default PostDetail