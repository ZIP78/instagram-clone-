import React from 'react'
import MdHeartOutline from "react-ionicons/lib/MdHeartOutline";

class Like extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            heartColor: ''
        }
        this.like = this.like.bind(this)
    }

    like() {
        let postId = this.props.post.id
        this.props.likePost(postId)
        if (this.props.post.liked_by_current_user) {
            this.setState({
                heartColor: 'red'
            })
        }
    }

    render() {
        const {post, likePost} = this.props
        return (
          <div insta-interactive-icons>
             <MdHeartOutline
                onClick={this.like}
                className="heart-icon"
            /> 
          </div>
        );
    }
}

export default Like