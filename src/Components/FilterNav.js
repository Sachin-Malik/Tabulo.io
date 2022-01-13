import React from 'react'
import SearchBar from './SearchBar'
function FilterNav({search,resetSearch}) {

   
    return (
        <div className='row float-right mr-2 mb-3'>
            <SearchBar search={search} resetSearch={resetSearch} />
        </div>
    )
}

export default FilterNav
