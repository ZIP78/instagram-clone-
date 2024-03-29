import React from "react";
import PostIndex from "./post_index";
import Suggestion from "../suggest/suggestion";
import "./main_page.css";
import { unFollow } from "../../actions/session";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  componentDidMount() {
    this.props.requestAllPost();
    this.props.getComments();
    this.props.requestUsers();
  }
  render() {
    const {
      users,
      posts,
      comments,
      getComments,
      likePost,
      removeLike,
      requestUsers,
      requestAllPost,
      loggedInUser,
      follow,
      unFollow,
      path,
      unfollowedUsers,
      darkmodeEnabled,
    } = this.props;

    return unfollowedUsers.length !== 0 ? (
      <header
        className={
          darkmodeEnabled
            ? "header-with-suggestions-darkMode"
            : "header-with-suggestions"
        }
      >
        <section
          className={
            darkmodeEnabled
              ? "main-page-container-darkMode"
              : "main-page-container"
          }
        >
          <Suggestion
            unfollowedUsers={unfollowedUsers}
            darkmodeEnabled={darkmodeEnabled}
            users={users}
            loggedInUser={loggedInUser}
            follow={follow}
            unFollow={unFollow}
            path={path}
          />
          <div className="insta-post-container">
            <PostIndex
              darkmodeEnabled={darkmodeEnabled}
              posts={posts}
              users={users}
              comments={comments}
              likePost={likePost}
              removeLike={removeLike}
              getComments={getComments}
              requestUsers={requestUsers}
              requestAllPost={requestAllPost}
              loggedInUser={loggedInUser}
            />
          </div>
        </section>
      </header>
    ) : (
      <header
        className={
          darkmodeEnabled ? "main-page-header-darkMode" : "main-page-header"
        }
      >
        <section
          style={{ maxWidth: 630 }}
          className={
            darkmodeEnabled
              ? "main-page-container-darkMode"
              : "main-page-container"
          }
        >
          <Suggestion
            darkmodeEnabled={darkmodeEnabled}
            unfollowedUsers={unfollowedUsers}
            users={users}
            loggedInUser={loggedInUser}
            follow={follow}
            unFollow={unFollow}
            path={path}
          />
          <div className="insta-post-container">
            <PostIndex
              darkmodeEnabled={darkmodeEnabled}
              posts={posts}
              users={users}
              comments={comments}
              likePost={likePost}
              removeLike={removeLike}
              getComments={getComments}
              requestUsers={requestUsers}
              requestAllPost={requestAllPost}
              loggedInUser={loggedInUser}
            />
          </div>
        </section>
      </header>
    );
  }
}

export default MainPage;
