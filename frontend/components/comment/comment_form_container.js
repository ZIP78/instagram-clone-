import {connect} from 'react-redux'
import CommentForm from './comment_form'
import {createComment, deleteComment} from '../../actions/comment'

const mapStateToProps = (state) => {
    
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)