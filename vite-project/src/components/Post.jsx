import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-list";
const Post = ({ postData }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div
        className="card"
        style={{ "maxWidth": "30rem", margin: "20px 15px" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            {postData.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(postData.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{postData.descipition}</p>
          {postData.hastages.map((tags) => (
            <span key={tags}>
              <button  className="btn btn-primary hastag" > # {tags}</button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Post;
