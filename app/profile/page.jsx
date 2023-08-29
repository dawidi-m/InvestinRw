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
      isinvestor: false,
      fullname:'',
      phonenbr: '',
      businesslicense: ''
  });

  const createProfile = async(e) =>{
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/profile/new',
      {
          method: 'POST',
          body: JSON.stringify({
              isinvestor: profile.isinvestor,
              userId: session?.user.id,
              fullname: profile.fullname,
              phonenbr: profile.phonenbr,
              bio: profile.bio,
              identification: profile.identification,
              businesslicense: profile.businesslicense,


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