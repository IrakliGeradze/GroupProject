import './App.css'
import { PostContext } from "./Components/PostContext";
import { useFetch } from "./Components/useFetch";
import PostForm from "./Components/postForm";
import PostList from "./Components/PostList";
import SearchBar from "./Components/searchBar";
import { useEffect, useContext } from "react";
import Footer from './Components/Footer';

function Blog() {
    const { posts, setPosts } = useContext(PostContext)
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");
    useEffect(() => {
        if (data && posts.length === 0) {
            const myInitialPosts = [
                { id: 101, 
                    title: "Created QR Codes", 
                    body: "Created qr codes in early 2022, took us 5 months to get apis and everything done.", 
                    author: "Team First", 
                    createdAt: new Date().toLocaleDateString(), 
                    isFavorite: false 
                },
                { id: 102, 
                    title: "WebBuilder", 
                    body: "By the time our QR Codes was creating, our member Dachi created free Web Builder.", 
                    author: "Team First", 
                    createdAt: new Date().toLocaleDateString(), 
                    isFavorite: false },
                { id: 103, 
                    title: "Design and Creativity", 
                    body: "Our Design and Creativity was made from Irakli Geradze, CEO of Team First.", 
                    author: "Team First", 
                    createdAt: new Date().toLocaleDateString(), 
                    isFavorite: false 
                },
                { id: 104, 
                    title: "Civs", 
                    body: "We have seen that making civs in almost every website it costs money, but not from us",
                    author: "Team First", 
                    createdAt: new Date().toLocaleDateString(), 
                    isFavorite: false 
                },
                { id: 105, 
                    title: "Team First",
                    body: "An idea of 3 people, Irakli, Dachi and Nika. Took us 4 Years, but its worth it", 
                    author: "Team First", 
                    createdAt: new Date().toLocaleDateString(), 
                    isFavorite: false 
                }
            ];
            setPosts(myInitialPosts);
        }
    }, [data, posts.length, setPosts]);
    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="blog-container next">
            <br /><br />
            <h1 id="h" style={{padding: '0 16px', textAlign: 'center'}}>
                Our <span id="purple">Latest</span> Stories
            </h1>
            <p id="ph" style={{padding: '0 16px'}}>
                Explore insights, updates, and tutorials from the Team First community.
            </p>
            <div className="blog-content" style={{padding: '0 16px', boxSizing: 'border-box'}}>
                <SearchBar />
                <PostForm />
                <div className="post-list-wrapper">
                    {loading ? <p id="ph">Fetching stories...</p> : <PostList />}
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog