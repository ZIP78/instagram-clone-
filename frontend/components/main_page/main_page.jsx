import React from "react";
import PostIndex from "./post_index";
import "./main_page.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: this.props.users };
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
    } = this.props;

    return (
      <header>
        <section className="main-page-container">
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
            />
          </div>
        </section>
      </header>
    );
  }
}

export default MainPage;
