import Layout from "./Components/Layout";
const Home = ()=>{
   return(
    <Layout>
     
      <div className="bg-black z-10">
        
        
        <div className="bg-black rounded-xl sm:mx-20 mx-5 py-5 sm:py-16 sm:mb-32 mb-16">
        <h1 className="sm:text-6xl text-4xl font-medium text-left text-white sm:pl-28">Get smarter about Indian Startups.</h1>
       

        <div className="grid sm:grid-cols-2 text-white text-3xl grid-cols-1 gap-x-5 py-8 gap-y-5 z-0">
        <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-teal-400 text-center rounded-3xl py-24"> Startup News </div>
        <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-blue-600 text-center rounded-3xl py-24"> unicorns</div>
        <div className="bg-white text-center  bg-zinc-900 rounded-3xl py-24"> Shark tank </div>

        </div>


        </div>



      </div>
    </Layout>
   )
}

export default Home;