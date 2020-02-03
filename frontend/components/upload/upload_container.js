import { connect } from 'react-redux'
import Upload from './upload'
import {createPost} from '../../actions/post'

// const mapStateToProps = (state) => {
//     return {}
// }

const mapDispatchToProps = (dispatch) => {
    
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(Upload)