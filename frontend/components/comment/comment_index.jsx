import React from 'react'
 
class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        
    }

   viewMoreComments() {
      let comments = Object.values(this.props.comments)
      debugger
       if (comments.length >= 3) {
          return <h1>View all {comments.length} comments</h1>
       }
   }

    render() {
        const {comments} = this.props
        return (
         <div>
                {this.viewMoreComments()}

             {Object.values(comments).slice(0, 2).map(comment => (
                 <div>{comment.body}</div> 
             ))}
                
         </div>

     )
    }
}

// const CommentIndex = ({comments}) => {

//     return (
//         <div> 
//             {Object.values(comments).map(comment => (
//                 comment.body
//             ))}
//         </div>
       
//     )
// }

export default CommentIndex

