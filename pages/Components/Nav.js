import Image from "next/image";
import Link from "next/link";

const Nav = ()=>{

  return(
    <div  className="bg-black py-3 z-zuto opacity-95">
      <span className="m-8">
      <Image className="p-4" alt="addify dark logo" width={170} height={52} src="/addifystartups.png" />
      </span>
      <div className="absolute top-0 space-x-2 text-xs right-0 text-white translate-y-8 -translate-x-4">
        <span className="text-black hover:bg-zinc-50 bg-white rounded-2xl py-2.5 px-5">Go to addify</span>

      </div>
    </div>
   )
}

export default Nav;