import { connect } from "react-redux";
import PostDetail from './post_detail'
import { requestPost } from "../../actions/post";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        post: state.entities.posts[ownProps.match.params.postId],
        currentUser: state.entities.users[state.session.id]
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
    requestPost: (id) => dispatch(requestPost(id))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(PostDetail)