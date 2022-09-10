import Nav from "./Nav";
import Head from "next/head";
const Header = ()=>{
  return(
    <div>
      <div className="sticky">
      <Nav />
      </div>
        <Head>
          <title>Addify Startups : Weekly Updates On Indian Startup</title>
        </Head>
    </div>
  )
}

export default Header;