import { createContext } from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const PostContext = createContext()
export const PostProvider = ({children}) => {
    const [posts, setPosts] = useLocalStorage("blog-posts", [])
    const [searchTerm, setSearchTerm] = useState("")



const addPost = (newPost) => {
    setPosts([newPost, ...posts])
};
const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
};
const addFavorite = (id) => {
    setPosts(
        posts.map((post) => 
            post.id === id ? {...post, isFavorite: !post.isFavorite} : post
        )
    )
}
const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
)
return (
    <PostContext.Provider
    value={{
        posts: filteredPosts,
        addPost,
        deletePost,
        addFavorite,
        setPosts,
        searchTerm,
        setSearchTerm
    }}
    >
        {children}
    </PostContext.Provider>
);
};
