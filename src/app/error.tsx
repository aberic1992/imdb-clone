"use client";

import { use, useEffect } from 'react';

interface IError {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset} : IError) {

    useEffect(() => {
        console.log(error);
        console.log("jJwza4");
    }, [error]);

  return (
    <div className='text-center mt-12'>
        <h2>Something went wrong</h2>
        <button className='py-2 px-4 mt-6 rounded-lg bg-amber-200 dark:bg-amber-500 font-medium' onClick={() => reset()}>Reset</button>
    </div>
  )
}
