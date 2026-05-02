import { useContext } from "react";
import { PostContext } from "./PostContext";
import PostCard from "./postCard";

const PostList = () => {
    const { posts } =  useContext(PostContext)
    return (
        <div className="post-list">
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    );
};
export default PostList;