import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../Store/post-list";

const PostList = () => {
  const { postList } = useContext(postListData);
  return (
    <>
      {postList.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </>
  );
};

export default PostList;
