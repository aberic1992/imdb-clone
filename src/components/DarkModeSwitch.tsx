"use client"
import {MdLightMode, MdOutlineLightMode} from  "react-icons/md";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => setMounted(true), [])

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted && currentTheme === "dark" ? 
        <MdLightMode className="hover:text-amber-500 cursor-pointer" onClick={() => setTheme("light")}/> :
         <MdOutlineLightMode className="hover:text-amber-500 cursor-pointer" onClick={() => setTheme("dark")}/>}
    </>
  )
}
