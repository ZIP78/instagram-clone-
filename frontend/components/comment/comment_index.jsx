import React from 'react'
 
class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.requestAllComments()
    // }

    render() {
        const {comments} = this.props
        return (
         <div>
             {Object.values(comments).map(comment => (
                 comment.body
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

