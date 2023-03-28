
import Link from "next/link";
import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
  <div className="flex justify-between items-center max-w-6xl py-6 sm:mx-auto">
    <div className="flex">
      <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
      <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoSquareFill}/>
    </div>

    <div className="flex items-center space-x-5">
      <DarkModeSwitch />
      <Link href="/">
        <h2 className="text-2xl flex items-center space-x-2">
          <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
          <span className="text-xl hidden sm:block">Clone</span>
        </h2>
      </Link>
    </div>
  </div>
    
  )
}
