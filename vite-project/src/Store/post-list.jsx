import { createContext, useReducer } from "react";

// Step 1: Create a Context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "Delete_post") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  }
  return newPostList;
};

// Step 2: Create a Provider Component
const PostListProvider = ({ children }) => {
  const default_post_data = [
    {
      id: "1",
      title: "going to mumbai",
      descipition:
        "gust wen to mumbai and stayed at nani's house and enjoyed very much",
      reactions: "0",
      user: "user_99",
      hastages: ["vacation", "enjoyed", "happy"],
    },
    {
      id: "2",
      title: "passed Btech",
      descipition:
        "i am totally suprised that i have completed my four years of engeenering i was having a logt of  managed fun but yet managed to pass my exams",
      reactions: "2",
      user: "user_69",
      hastages: ["B-tech", "graduation ", "freinds"],
    },
  ];

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_post_data
  );

  const addPost = () => {};
  const deletePost = (id) => {
    console.log(`the post deleted ${id}`);
    dispatchPostList({
      type: "Delete_post",
      payload: {
        id,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
