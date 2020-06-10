import React from "react";
import PostIndex from "./post_index";
import "./main_page.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    debugger;
    this.props.requestUsers();
    // debugger;
    // this.props.users;
    this.props.requestAllPost();
    this.props.getComments();
  }

  componentDidUpdate(prevState, prevProps) {
    debugger;
  }

  render() {
    console.log(this.props.users);

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
    console.log(posts);
    if (!users) return null;
    // debugger;
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
