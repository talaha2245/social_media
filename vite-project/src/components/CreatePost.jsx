import { useContext, useRef } from "react";
import { PostList } from "../Store/post-list";

const CreatePost = () => {
  const userIdElement = useRef();
  const titleElement = useRef();
  const descipitionElement = useRef();
  const reactionsElement = useRef();
  const hastagesElement = useRef();
  const { addPost } = useContext(PostList)
  const handleOnSubmit = (event)=>{
    event.preventDefault()
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const description = descipitionElement.current.value;
    const reactions = reactionsElement.current.value;
    const hastags = hastagesElement.current.value.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    addPost(userId,title,description,reactions,hastags);
  }
  return (
    <>
      <form className="createPost" onSubmit={handleOnSubmit}>
      <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            user_id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userid"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label" >
            post Title
          </label>
          <input
            placeholder="How are you feeling today.."
            ref={titleElement}
            type="text"
            className="form-control"
            id="postTitle"
          />
        </div>
        <div className="mb-3" >
          <label htmlFor="PostDescription" className="form-label">
            description
          </label>
          <textarea rows={5}
            placeholder="Tell us more..."
            ref={descipitionElement}
            type="text"
            className="form-control"
            id="PostDescription"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postReactions" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="postReactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hastags" className="form-label">
            hastags
          </label>
          <input
            ref={hastagesElement}
            type="text"
            className="form-control"
            id="postReactions"
          />
        </div>
        
        <center><button type="submit" className="btn btn-primary postButton">
          post
        </button></center>
      </form>
    </>
  );
};
export default CreatePost;