import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { requestAllPost } from "../../actions/post";
import {
  requestUsers,
  profilePicture,
  follow,
  unFollow,
  editProfile,
  toggleDm,
} from "../../actions/session";

import { requestFollows } from "../../actions/follow";
import { type } from "jquery";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    profileUser: Object.values(state.entities.users).filter((obj) => {
      return obj.username === ownProps.match.params.username;
    })[0],
    loggedInUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    users: state.entities.users,
    follows: state.entities.follows,
    darkmodeEnabled: state.entities.darkmode["darkThemeEnabled"],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPost: () => dispatch(requestAllPost()),
    requestUsers: () => dispatch(requestUsers()),
    requestFollows: () => dispatch(requestFollows()),
    profilePicture: (pic) => dispatch(profilePicture(pic)),
    editProfile: (info) => dispatch(editProfile(info)),
    follow: (userId) => dispatch(follow(userId)),
    unFollow: (userId) => dispatch(unFollow(userId)),
    // darkmode: () => dispatch({ type: TOGGLE_DARKMODE }),
    toggleDm: () => dispatch(toggleDm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
