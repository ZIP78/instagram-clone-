import React from "react";
import PostIndex from "./post_index";
import Suggestion from "../suggest/suggestion";
import "./main_page.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
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
    } = this.props;

    return (
      <header>
        <section className="main-page-container">
          <Suggestion users={users} loggedInUser={loggedInUser} />
          <div className="insta-post-container">
            <PostIndex
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
