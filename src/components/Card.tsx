import { IResult } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";

import { FaThumbsUp } from "react-icons/fa";
interface ICardProps {
    result: IResult
}

export default function Card({result}: ICardProps) {

  return (
    <div className="cursor-pointer sm:border-2 sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg
     sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Link href={`/movie/${result.id}`}>
            <Image 
                width={500} 
                height={300} 
                style={{
                    maxWidth: "100%",
                    height: "auto",
                }}
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                alt="image not found"
                className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                placeholder="blur"
                blurDataURL="/spinner.svg"
            />
            <div className="p-2">
                <p className="line-clamp-2 font-normal">{result.overview}</p>
                <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
                <div className="flex items-baseline h-5">
                    <span>{result.release_date || result.first_air_date}</span>
                    <FaThumbsUp className="ml-4 mr-1"/>
                    <span>{result.vote_count}</span>
                </div>
                
            </div>

            
        </Link>
    </div>
  )
}
