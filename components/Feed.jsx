'use client';
import { useState,useEffect } from "react"

import ProjectCard from "./ProjectCard";
import Chat from "./Chat";
import Link from "next/link";

const ProjectCardList = ({data, handleTagClick}) => {

  return (
    <Link href="/project_details">
    <div className="mt-16 prompt_layout">
      {data.map((post) =>(
        <ProjectCard 
          key={post._id} 
          post = {post}
          handleTagClick = {handleTagClick}

        />
      ))}
    </div>
    </Link>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
 

  const [posts, setPosts] = useState([])
  const handleSearchChange = (e) =>{

  }

  useEffect (()=> {
const fetchPosts = async() =>{
  const response =  await fetch('api/project')
  const data = await response.json()
  setPosts(data)
}
console.log(posts);
fetchPosts();
  },[]);

  return (
    <section className="feed">
      <form  className="relative w-full flex-center">
        <input type="text"
        placeholder="Search for tag or username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer" />
      </form>

      <ProjectCardList
        data = {posts}
        handleTagClick={() => {}}
        />
        
        {/* load chatbot */}
      {/* <Chat/> */}
    
    </section>
  )
}

export default Feed