import React from "react";
import PostIndex from "./post_index";
import "./main_page.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestAllPost();
  }

  render() {
    const {
      users,
      logout,
      posts,
      comments,
      getComments,
      likePost,
      removeLike,
      requestUsers,
      requestAllPost,
    } = this.props;
    // console.log(posts)
    console.log(users);
    if (!users || !posts) return null;
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
          {/* <button onClick={logout}>Logout</button> */}
        </section>
      </header>
    );
  }
}

export default MainPage;
