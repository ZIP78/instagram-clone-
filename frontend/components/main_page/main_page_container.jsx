import {connect} from 'react-redux'
import MainPage from './main_page'
import {logout} from '../../actions/session'
import { requestAllPost} from '../../actions/post'
import {getComments} from '../../actions/comment'
import {likePost} from '../../actions/like'

const mapStateToProps = (state) => {
    
   return {
       posts: state.entities.posts,
       comments: state.entities.comments,
       users: state.entities.users
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
    logout: () => dispatch(logout()),
    requestAllPost: () => dispatch(requestAllPost()),
    getComments: () => dispatch(getComments()),
    likePost: (like) => dispatch(likePost(like))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)