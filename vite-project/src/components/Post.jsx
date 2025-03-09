const Post = ({postData}) => {
  return (
    <>
      <div className="card" style={{"max-width":"30rem", margin: "20px 15px"}}>
        <div className="card-body">
          <h5 className="card-title">{postData.title}</h5>
          <p className="card-text">
            {postData.descipition}
          </p>
          {postData.hastages.map((tags)=><span><button class="btn btn-primary hastag" ># {tags}</button></span>)}
        </div>
      </div>
    </>
  );
};
export default Post;
