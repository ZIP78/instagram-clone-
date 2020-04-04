import { connect } from "react-redux";
import PostDetail from './post_detail'
import { requestPost } from "../../actions/post";
import { getComments } from "../../actions/comment"

const mapStateToProps = (state, ownProps) => {
    
    return {
        post: state.entities.posts[ownProps.match.params.postId],
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
    requestPost: (id) => dispatch(requestPost(id)),
    getComments: () => dispatch(getComments())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(PostDetail)