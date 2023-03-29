import React from 'react'
import NavbarItem from './NavbarItem'

export default function NavBar() {
  return (
    <div className='flex space-x-4 justify-center py-6 dark:bg-gray-600 bg-amber-100 lg:text-lg'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

