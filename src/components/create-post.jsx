import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";


const CreatePost=()=>{
  const{addPost}=useContext(PostList);



   const userIdElement  = useRef();
   const postTitleElement = useRef();
   const postBodyElement  = useRef();
   const reactionsElement  = useRef();
   const tagsElement  = useRef();

const handleSubmit = (event) => {
event.preventDefault();
const userId = userIdElement.current.value;
const postTitle = postTitleElement.current.value;
const postBody = postBodyElement.current.value;
const reactions = reactionsElement.current.value;
const tags = tagsElement.current.value.split(' ');

userIdElement.current.value="";
postTitleElement.current.value="";
postBodyElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";




addPost(userId,postTitle,postBody,reactions,tags);


};

  return (
        <form className="createPost" onSubmit={handleSubmit}>
  <div class="mb-3">
    <label htmlFor="userId" class="form-label">Enter UserId</label>
    <input type="text" ref={userIdElement} class="form-control" id="userId" placeholder="ID"/>
  </div>
  
  <div class="mb-3">
    <label htmlFor="body" class="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} class="form-control" id="body" />
  </div>
  
  <div class="mb-3">
    <label htmlFor="body" class="form-label">Content</label>
    <textarea type="text" ref={postBodyElement} class="form-control" id="body" placeholder="How are you feeling today"/>
  </div>
  
  <div class="mb-3">
    <label htmlFor="reactions" class="form-label">Number of reactions</label>
    <input type="text" ref={reactionsElement} class="form-control" id="reactions" placeholder="People Reacted"/>
  </div>

  <div class="mb-3">
    <label htmlFor="tags" class="form-label">HashTags</label>
    <input type="text" ref={tagsElement} class="form-control" id="tags" />
  </div>
  
  <button type="submit" class="btn btn-primary">Post</button>
</form>
    )
}
export default CreatePost;