'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ProfileForm from "@components/ProfileForm";



const MyProfile = () => {

  const router = useRouter();
  const {data: session} = useSession();
  
  const [submitting, setSubmitting] = useState(false);
  const [profile, setProfile] = useState({
      role: false,
      fullname:'',
      phonenbr: '',
      bio: '',
      identification: ''
  });

  const createProfile = async(e) =>{
    e.preventDefault();
    setSubmitting(true);
console.log("a");
    try {
        console.log("bc");
      const response = await fetch('/api/profile/create',
      {
          method: 'POST',
          body: JSON.stringify({
              role: profile.role,
              userId: session?.user.id,
              fullname: profile.fullname,
              phonenbr: profile.phonenbr,
              bio: profile.bio,
              identification: profile.identification,


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

      <div>
     <ProfileForm
     type="Create"
     profile = {profile}
     setProfile = {setProfile}
     submitting = {submitting}
     handleSubmit= {createProfile}

     />

      </div>

    
  )
}

export default MyProfile;