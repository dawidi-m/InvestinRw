"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname,useRouter } from "next/navigation";

const ProjectCard = (post, handleTagClick, handleEdit, handleDelete) => {
  const [copied, setCopied] = useState("");
  const handleCopy = () =>{
    setCopied(post.post.creator.username);
    navigator.clipboard.writeText(post.post.creator.username);
    setTimeout (()=> setCopied(""),3000);
  }

  
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image src= {post.post.creator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"/>
      <div className="flex flex-col">
        <h3 className="font-satoshi font-semibold text-gray-900">{post.post.projectName}</h3>
        <p className="font_inter text-sm text-gray-500">{post.post.creator.username}</p>
        <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={()=>{ handleTagClick && handleTagClick ()}}>{post.post.tags}</p>

      </div>  
          
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
          src= {copied === post.post.creator.username ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
          width={12}
          height={12}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard