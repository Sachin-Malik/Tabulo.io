import React from 'react'
import SearchBar from './SearchBar'
import TypeFilter from './TypeFilter'

function FilterNav({checkBoxClicked,checkBoxes,updateSearch,resetFilters}) {

    return (
        <div className='row mx-0 mb-3'>
            <TypeFilter checkBoxClicked={checkBoxClicked} checkBoxes={checkBoxes} />
            <SearchBar updateSearch={updateSearch} resetFilters={resetFilters}/>
        </div>
    )
}

export default FilterNav
