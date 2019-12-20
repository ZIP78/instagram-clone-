import {connect} from 'react-redux'
import MainPage from './main_page'
import {logout} from '../../actions/session'

const mapStateToProps = (state) => {
   return {
       currentUser: state.entities.users[state.session.id]
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
    logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)