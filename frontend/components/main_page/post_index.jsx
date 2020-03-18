import React from 'react'
import VideoPlayer from "react-video-js-player";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faComment} from "@fortawesome/free-regular-svg-icons"
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons"
import CommentForm from "../comment/comment_form_container"
import CommentIndex from "../comment/comment_index"


                
class PostIndex extends React.Component {

     constructor(props){
          super(props)
          
     }
     componentDidMount() {
          this.props.getComments()
     }

     render() {
          const { posts, comments} = this.props
           return (
       <div className="post-container">
               { Object.values(posts).map(post => {
                   return (
                     <div className="individual-post">
                       <div className="post-upper-part">
                            <FontAwesomeIcon className="post-ellipsh" icon={faEllipsisH}/>
                       </div>
                       <div className="post-middle-part">
                            { (post.photoUrl.split('.').pop() === "mp4") ?
                               <VideoPlayer className="instagram-post" src={post.photoUrl} />
                                    :
                                <img className="instagram-post" src={post.photoUrl} />
                            }
                       </div>
                       <div className="post-bottom-part">
                           <div className="insta-interactive-icons">
                                <FontAwesomeIcon className="heart-icon" icon={faHeart}/>
                                <Link to={`/posts/${post.id}`}>
                                    <FontAwesomeIcon  className="comment-icon" icon={faComment}/>
                                </Link>    
                           </div>
                           <div className="insta-likes-container">
                                <h3>Likes here</h3>
                           </div>

                            <div className="insta-likes-container">
                                <h3>Caption here</h3>
                           </div>

                           <div className="insta-likes-container-test">
                                       <CommentIndex comments={comments}/>
                                <h1>test</h1>
                           </div>

                           <div className="insta-likes-container-time-test">
                                <h3>Time posted here</h3>
                           </div>

                            <div className="insta-likes-container-comment">
                                   <CommentForm post={post}/>
                           </div>


                            
                       </div>

                       
                     </div>
                   );   
               })} 
        </div> 
    );
     }
}

// const PostIndex = ({posts, comments}) => {
    
//     return (
//        <div className="post-container">
//                { Object.values(posts).map(post => {
//                    return (
//                      <div className="individual-post">
//                        <div className="post-upper-part">
//                             <FontAwesomeIcon className="post-ellipsh" icon={faEllipsisH}/>
//                        </div>
//                        <div className="post-middle-part">
//                             { (post.photoUrl.split('.').pop() === "mp4") ?
//                                <VideoPlayer className="instagram-post" src={post.photoUrl} />
//                                     :
//                                 <img className="instagram-post" src={post.photoUrl} />
//                             }
//                        </div>
//                        <div className="post-bottom-part">
//                            <div className="insta-interactive-icons">
//                                 <FontAwesomeIcon className="heart-icon" icon={faHeart}/>
//                                 <Link to={`/posts/${post.id}`}>
//                                     <FontAwesomeIcon  className="comment-icon" icon={faComment}/>
//                                 </Link>    
//                            </div>
//                            <div className="insta-likes-container">
//                                 <h3>Likes here</h3>
//                            </div>

//                             <div className="insta-likes-container">
//                                 <h3>Caption here</h3>
//                            </div>

//                            <div className="insta-likes-container-test">
//                                 <CommentIndex comments={comments}/>
//                            </div>

//                            <div className="insta-likes-container-time-test">
//                                 <h3>Time posted here</h3>
//                            </div>

//                             <div className="insta-likes-container-comment">
//                                    <CommentForm post={post}/>
//                            </div>


                            
//                        </div>

                       
//                      </div>
//                    );   
//                })} 
//         </div> 
//     );
// }

export default PostIndex