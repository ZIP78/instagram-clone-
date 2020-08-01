import { connect } from "react-redux";
import MainPage from "./main_page";
import { logout, requestUsers, follow, unFollow } from "../../actions/session";
import { requestAllPost, likePost, removeLike } from "../../actions/post";
import { getComments } from "../../actions/comment";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    //unfollowed users
    unfollowedUsers: Object.values(state.entities.users).filter((user) => {
      let loggedInUserFollowing = Object.values(
        state.entities.users[state.session.id].following
      ).map((following) => {
        return following.followed_user_id;
      });
      if (
        !loggedInUserFollowing.includes(user.id) &&
        user.id !== state.entities.users[state.session.id].id
      ) {
        return user;
      }
    }),
    posts: state.entities.posts,
    comments: state.entities.comments,
    loggedInUser: state.entities.users[state.session.id],
    path: ownProps.history.location.pathname,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUsers: () => dispatch(requestUsers()),
    logout: () => dispatch(logout()),
    requestAllPost: () => dispatch(requestAllPost()),
    getComments: () => dispatch(getComments()),
    likePost: (postId) => dispatch(likePost(postId)),
    removeLike: (id) => dispatch(removeLike(id)),
    follow: (userId) => dispatch(follow(userId)),
    unFollow: (userId) => dispatch(unFollow(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
