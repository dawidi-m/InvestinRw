'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from '@components/Form';
 
 const CreateProject = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        projectName: '',
        desc:'',
        tags: '',
        capital: 0.0,
        investment: 0.0,
        investors:0
    });

    const createProject = async(e) =>{
       e.preventDefault();
       setSubmitting(true);

       try {
        const response = await fetch('/api/project/new',
        {
            method: 'POST',
            body: JSON.stringify({
                projectName: post.projectName,
                userId: session?.user.id,
                tags: post.tags,
                desc: post.desc,
                capital: post.capital,
                investment:0.0,
                investors:0

            })
        })

        if(response.ok){
            router.push('/');
        }
       } catch (error) {
        console.log(error);
       } finally {
        setSubmitting(false);
       }

    }
   return (
     <Form
     type="Create"
     post = {post}
     setPost = {setPost}
     submitting = {submitting}
     handleSubmit= {createProject}

     />
   )
 }
 
 export default CreateProject