interface IResult {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IProps {
    results: IResult[];
}

export default function Results({results}:IProps) {
  return (
    <div className="flex flex-col">
        {results.map((result: IResult)=> (
            <span key={result.id}>{result.title}</span>
        ))}
    </div>
  )
}