import React from "react";
import { Provider } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
