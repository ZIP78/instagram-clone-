import React from 'react'
import './post_detail.css'
import VideoPlayer from "react-video-js-player";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";




class PostDetail extends React.Component {
    
    constructor(props) {
        super(props)
        // this.attachment = this.attachment.bind(this)
        
    }

    componentDidMount() {
        this.props.requestPost(this.props.match.params.postId)
    }

    // componentDidUpdate() {

    // }

    // attachment() {
    

    // } 
                            

    render() {
        
        if (!this.props.post) return null
        return (
          <div className="post-show-container">
            {this.props.post.photoUrl.split(".").pop() === "mp4" ? (
              <VideoPlayer
                className="instagram-show-post-video"
                src={this.props.post.photoUrl}
              />
            ) : (
              <img
                className="instagram-show-post"
                src={this.props.post.photoUrl}
              />
            )}

            <div className="show-post-upper-part">
                <div className="insta-profile-icon"></div>
              <FontAwesomeIcon
                className="post-show-ellipsh"
                icon={faEllipsisH}
              />
              <div className="show-profile-name">
                {this.props.currentUser.username}
              </div>

              <div className="show-post-comments">
                <div className="show-caption-section"></div>
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