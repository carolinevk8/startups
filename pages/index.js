import Layout from "./Components/Layout";
const Home = ()=>{
   return(
    <Layout>
     
      <div className="bg-black mt-12">
        
        
        <div className="bg-white rounded-xl sm:mx-20 mx-5 py-20 sm:mb-32 mb-16">
        <h1 className="sm:text-6xl text-3xl font-black text-left text-zic-900 pl-28">Get smarter about Indian Homegrown Startups.</h1>
       

        <div className="grid sm:grid-cols-2 text-white text-5xl grid-cols-1 gap-x-5 mx-40 py-8 gap-y-5">
        <div className="bg-white text-center bg-rose-500 rounded-3xl py-24"> Startup Rankings </div>
        <div className="bg-white text-center bg-rose-500 rounded-3xl py-24"> Homegrown Startup Jobs</div>
        <div className="bg-white text-center bg-rose-500 rounded-3xl py-24"> Launch Your Startup </div>
        <div className="bg-white text-center bg-rose-500 rounded-3xl py-24"> Startup Newsletter </div>


        </div>


        </div>



      </div>
    </Layout>
   )
}

export default Home;