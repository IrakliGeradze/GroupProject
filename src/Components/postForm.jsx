import { useContext, useState } from "react";

import { PostContext } from "./PostContext";

const PostForm = () => {
    const { addPost} = useContext(PostContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        addPost({
            id: Date.now(),
            title,
            body,
            author,
            createdAt: new Date().toLocaleDateString(),
            isFavorite: false
        });
        setTitle(""), setBody(""), setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <input placeholder="title" value={title} onChange={e => setTitle(e.target.value)} required />
            <textarea placeholder="text" value={body} onChange={e => setBody(e.target.value)} required />
            <input placeholder="author" value={author} onChange={e => setAuthor(e.target.value)} required />
            <button type="submit">add</button>
        </form>
    )
};
export default PostForm;