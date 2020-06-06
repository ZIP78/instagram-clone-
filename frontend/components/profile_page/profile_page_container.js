import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { requestAllPost } from "../../actions/post";
import {
  requestUsers,
  profilePicture,
  follow,
  unFollow,
} from "../../actions/session";

const mapStateToProps = (state, ownProps) => {
  return {
    profileUser: Object.values(state.entities.users).filter((obj) => {
      return obj.username === ownProps.match.params.username;
    })[0],
    posts: state.entities.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPost: () => dispatch(requestAllPost()),
    requestUsers: () => dispatch(requestUsers()),
    profilePicture: (pic) => dispatch(profilePicture(pic)),
    follow: (userId) => dispatch(follow(userId)),
    unFollow: (userId) => dispatch(unFollow(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
