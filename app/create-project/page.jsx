'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from '@components/Form';
 
 const CreateProject = () => {
    const [submitting, setSubmitting] = useState(false);
    const [Post, setPost] = useState({
        projectName: '',
        tag: '',
        capital: 0.0,
        investment: 0.0
    });
   return (
     <Form
     />
   )
 }
 
 export default CreateProject