import { useContext } from "react";
import { PostContext } from "./PostContext";

const SearchBar = () => {
    const { searchTerm, setSearchTerm} = useContext(PostContext)
    return (
        <input type="text" placeholder="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-bar"/>
    );
};


export default SearchBar;