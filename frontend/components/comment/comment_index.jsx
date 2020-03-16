import React from 'react'


const CommentIndex = ({comments}) => {
    return (
        <div> 
            {Object.values(comments).map(comment => {
                return (    comment.body )
            })}
        </div>
       
    )
}

export default CommentIndex

