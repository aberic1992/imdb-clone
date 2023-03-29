import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/"

interface ISearchParams {
  genre?: string;
}

interface ISearchParamsProps {
  searchParams: ISearchParams;
}

export default async function Home({searchParams}:ISearchParamsProps) {

  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(`${BASE_URL}${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`, {next:{ revalidate: 10000 }});

  const data = await res.json();

  const results = data.results;
  console.log(results)

  if(!res.ok) {
    throw new Error("failed to fetch data")
  }

  return (
    <div className="flex justify-center">
      <Results results={results}/>
    </div>
  )
}
