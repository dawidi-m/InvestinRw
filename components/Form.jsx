import Link from "next/link"

const Form = ({ type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Project   </span>
        </h1>
        <p className="desc text-left max-w-md">
          {type} and get investments to  expand
        </p>
        
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        
        <label htmlFor="">
          <span className="satoshi font-semibold text-base text-gray-700">
             Project Name          
          </span>
            <input value={post.projectName}
              onChange={(e) => setPost({...post,
                projectName: e.target.value})}
              placeholder="Name"
              required
              className="form_input"
              />
          </label>


            <label htmlFor="">
              <span className="satoshi font-semibold text-base text-gray-700"> Your Project Description</span>        
                <textarea value={post.desc}
                  onChange={(e) => setPost({...post,
                  desc: e.target.value})}
                  placeholder="Write the decription here"
                  required
                  className="form_textarea"
                  />
               </label>

            <label htmlFor="">
              <span className="satoshi font-semibold text-base text-gray-700"> Tags  {``}
              <span className="font-normal">(#product, #website, #idea, #agriculture, #education, #foodpoverty, # youth)</span>
              </span>
                <input value={post.tags}
                  onChange={(e) => setPost({...post,
                  tags: e.target.value})}
                  placeholder="#tags"
                  required
                  className="form_input"
                  />
               </label>
    
        <label htmlFor="">
          <span className="satoshi font-semibold text-base text-gray-700">
             Capital($)       
          </span>
            <input 
            type="number"
            value={post.capital}
              onChange={(e) => setPost({...post,
                capital: e.target.value})}
              placeholder="Capital in USD"
              required
              className="form_input"
              />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>
            
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

export default Form