import { useState } from "react";
import { useContext } from "react";
import { PostContext } from "./PostContext";

const PostCard =({ post }) => {
    const { deletePost, addFavorite} = useContext(PostContext)
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className={`post-card ${post.isFavorite ? "favorite" : ""}`}>
            <div className="post-header">
                <h3 onClick={() => setShowDetails(!showDetails)}>{post.title}</h3>
                <span className="post-date">{post.createdAt}</span>
            </div>
            <p className="post-author">By {post.author}</p>
            {showDetails && <p className="post-body">{post.body}</p>}
            <div className="post-actions">
                <button className="fav-btn" onClick={() => addFavorite(post.id)}>
                    {post.isFavorite ? "❤️" : "🤍"}
                </button>
                <button className="delete-btn" onClick={() => deletePost(post.id)}>
                    Delete 🚮
                </button>
            </div>
        </div>
    )
};
export default PostCard;