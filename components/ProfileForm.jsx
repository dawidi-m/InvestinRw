import React from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link"

const ProfileForm = ({type,profile,setProfile,submitting,handleSubmit}) => {
  return (
    
   <section>
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Profile  </span>
        </h1>
        <p className="desc text-left max-w-md">
         for verification
        </p>
        
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        
        <label htmlFor="">
          <span className="satoshi font-semibold text-base text-gray-700">
             Enter full Name          
          </span>
            <input value={profile.fullname}
              onChange={(e) => setProfile({...profile,
                fullname: e.target.value})}
              placeholder=" Full Name"
              required
              className="form_input"
              />
          </label>


            <label htmlFor="">
              <span className="satoshi font-semibold text-base text-gray-700"> Biography</span>        
                <textarea value={profile.bio}
                  onChange={(e) => setProfile({...profile,
                  bio: e.target.value})}
                  placeholder="Bio for either owner or investor"
                  required
                  className="form_textarea"
                  />
               </label>

            <label htmlFor="">
              <span className="satoshi font-semibold text-base text-gray-700"> Phone Number </span>
                <input value={profile.phonenbr}
                  onChange={(e) => setProfile({...profile,
                    phonenbr: e.target.value})}
                  paceholder="+250"
                  required
                  className="form_input"
                  />
               </label>
    
        <label htmlFor="">
          <span className="satoshi font-semibold text-base text-gray-700">
            Identification Number-Passport/National ID    
          </span>
            <input 
           
            value={profile.identification}
              onChange={(e) => setProfile({...profile,
                identification: e.target.value})}
              placeholder="ID ..."
              required
              className="form_input"
              />
          </label>
{/* 
          <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Select Role
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="black_btn " onAction={(key) => setProfile({...profile,identification:key})} >
        <DropdownItem key="new">Investor</DropdownItem>
        <DropdownItem key="copy">Project owner</DropdownItem>
      </DropdownMenu>
    </Dropdown> */}

<select
    type='text'
    name="role"
    className='itemAvailability form_input'
    value={profile.role}
    onChange={(e) => setProfile({...profile,
      role: e.target.value})}
> 
    <option> Select role</option>
    <option value="investor">investor</option>
    <option value="owner">owner</option>
</select>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>
            <br />
            <br />
            <br />
            <br />


            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                  >
                    {submitting ? `${type}...`: type}
            </button>
          </div>

               
          </form>
   </section>
  )
}

export default ProfileForm