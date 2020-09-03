import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import followersReducer from "./followers.reducer";
import darkmodeReducer from "./darkmode_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  follows: followersReducer,
  darkmode: darkmodeReducer,
});

export default entitiesReducer;
