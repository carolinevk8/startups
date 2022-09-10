import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children})=>{
   return(
    <div className="bg-black">
        <div className="sticky top-0">
        <Header />
        </div>
        <main>{children}</main>
        <Footer />
    </div>
   )
}

export default Layout;