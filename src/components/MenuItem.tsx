import Link from "next/link";
import { IconType } from "react-icons/lib";

interface IMenuItem {
    title: string;
    address: string; 
    Icon: IconType;
}
export default function MenuItem({title, address, Icon}: IMenuItem)  {
  return (
    <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
            <Icon className="mx-4 text-2xl sm:hidden"/>
            <p className="mx-4 hidden sm:block">{title}</p>
        </Link>
    </div>
  )
}
