import Feed from "@components/feed"

const Home = () => (
 <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
           Discover and share  
           <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Business opportunities via AI</span>
        </h1>
        <p className="desc text-center">
            InvestInRw is a platform to invest in Businesses in Rwanda
        </p>
         
         <Feed />
      
    </section>
)

export default Home