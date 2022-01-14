import React from 'react'
import SearchBar from './SearchBar'
import TypeFilter from './TypeFilter'

function FilterNav({checkBoxClicked,checkBoxes,updateSearch,resetFilters,itemsPerPage,updateItemsPerPage}) {

    return (
        <div className='row mx-0 mb-2'>
            <TypeFilter 
                checkBoxClicked={checkBoxClicked} 
                checkBoxes={checkBoxes} 
                itemsPerPage={itemsPerPage}
                updateItemsPerPage={updateItemsPerPage}
            />
            <SearchBar 
            updateSearch={updateSearch} 
            resetFilters={resetFilters}
            />
        </div>
    )
}

export default FilterNav
