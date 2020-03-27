import React from 'react'
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosTextOutline from "react-ionicons/lib/IosTextOutline"
import { Link } from "react-router-dom";




class LikeComment extends React.Component {
    constructor(props) {
        super(props)
      
        this.like = this.like.bind(this)
        this.removeLike = this.removeLike.bind(this)
    }

    like() {
        let postId = this.props.post.id
        this.props.likePost(postId)
    }

    removeLike() {
      let postId = this.props.post.id
      this.props.removeLike(postId)
    }

    render() {
        const {post, likePost} = this.props
        let heart;
        if (this.props.post.liked_by_current_user) {
              heart = <IosHeart
                 onClick={this.removeLike}
                color="red"
                 className="heart-icon"
               />
        } else {
            heart = 
              <IosHeartOutline
                onClick={this.like}
                className="heart-icon"
              />
            
        }
        return (
          <div class="insta-interactive-icons">
            {heart}
            <Link to={`/posts/${post.id}`}>
              <IosTextOutline className="comment-icon" />
            </Link>
          </div>
        );
    }
}

export default LikeComment