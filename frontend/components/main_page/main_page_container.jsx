import {connect} from 'react-redux'
import MainPage from './main_page'
import {logout} from '../../actions/session'
import { requestAllPost} from '../../actions/post'

const mapStateToProps = (state) => {
    
   return {
       posts: state.entities.posts,
       comments: state.entities.comments,
       currentUser: state.entities.users[state.session.id]
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
    logout: () => dispatch(logout()),
    requestAllPost: () => dispatch(requestAllPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)