import React from 'react'
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosHeart from "react-ionicons/lib/IosHeart";
// import heartIcon from '../../../app/assets/images/favorite_border-24px.svg'
// import { IoMdHeartEmpty } from "react-icons/io";




class Like extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // heartColor: ''
        }
        this.like = this.like.bind(this)
        this.removeLike = this.removeLike.bind(this)
    }

    like() {
        let postId = this.props.post.id
        this.props.likePost(postId)
            // this.setState({
            //     heartColor: 'red'
            // })
    }

    removeLike() {
      let postId = this.props.post.id
      this.props.removeLike(postId)
    }

    render() {
        // const {post, likePost} = this.props
        let heart;
        if (this.props.post.liked_by_current_user) {
              heart = <IosHeart
                 onClick={this.removeLike}
                //  style={{color: this.state.heartColor}}
                color="red"
                 className="heart-icon"
               />
        } else {
            heart = 
              <IosHeartOutline
                onClick={this.like}
                //  style={{color: this.state.heartColor}}
                className="heart-icon"
              />
            
        }
        return (
          <div class="insta-interactive-icons">
              {heart}
          </div>


        );
    }
}

export default Like