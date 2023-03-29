import { IResult } from "@/interfaces";
import Card from "./Card";


interface IResults {
    results: IResult[];
}

export default function Results({results}:IResults) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {results.map((result: IResult)=> (
            <Card key={result.id} result={result} />
        ))}
    </div>
  )
}