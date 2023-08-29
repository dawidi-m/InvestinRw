import React from 'react'

const ProjectDetails = (props) => {
  return (
    <section  className="w-full max-w-full  flex-col">
      <div style={{flex:1,display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

    <h1  className="head_text text-left mt-10 w-full max-w-4xl ">
      <span className="blue_gradient"> Auction Rwanda  </span>
      </h1>
      <form
        className="mb-10 mt-10 w-full max-w-4xl flex flex-col gap-7 glassmorphism">
      
      <label htmlFor="">
        <span style={{fontSize:25}} className="satoshi font-semibold text-base text-gray-700">
           PROJECT OWNER          
        </span>
        <div style={{height:15}}>

        </div>

        <p className='font-semibold'>Patrick Iradukunda</p>
        <p style={{fontSize:14, marginTop:5}}>Phone : +250789652781 | Email: invest@account.local</p>
          {/* <input 
            placeholder="Name"
            required
            className="form_input"
            /> */}
        </label>

            <hr />
          <label htmlFor="">
            <span style={{fontSize:25}}  className="satoshi font-semibold text-base text-gray-700"> DETAILS/DESCRIPTION</span>        
              {/* <textarea 
               
                placeholder="Write the decription here"
                required
                className="form_textarea"
                /> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic optio eaque unde veritatis sunt, quis est quisquam velit exercitationem ex, cum doloribus. Assumenda consequatur quis mollitia provident excepturi corrupti. 
                  Ipsum dolor sit amet consectetur adipisicing elit. Facere magnam animi qui aperiam, exercitationem dolor delectus architecto odit natus error fugit eius veniam sed ut asperiores. Accusamus totam voluptatum soluta.
                </p>
             </label>


             <label htmlFor="">
        <span className="satoshi font-semibold text-base text-gray-700">
           CAPITAL($)       
        </span>
          <input 
          type="text"
          disabled
           value={"$ 12000"}
            placeholder="Capital in USD"
            required
            className="form_input font-semibold"
            />
           <i><small>Amount required to invest in the project.</small></i>
        </label>

          <label htmlFor="">
            <p className="satoshi font-semibold text-base text-gray-700">TAGS</p>
            <span className="satoshi font-semibold text-base text-gray-700">
            <span className="font-normal">#product, #website, #idea, #agriculture, #education, #foodpoverty, # youth</span>
            </span>
              {/* <input 
               
                placeholder="#tags"
                required
                className="form_input"
                /> */}
             </label>
  
     

       

             
        </form>
      
      </div>     
      
  </section>
  )
}

export default ProjectDetails