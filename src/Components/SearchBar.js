import React,{useState} from 'react'

function SearchBar({updateSearch,resetFilters}) {
    const [searchTerm,setSearchTerm]=useState('');
    
    const handleSearchTermChange=(event)=>{
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }

    return (
        <div className='col'>
        <div className='row justify-content-end'>
            <input type='text' className='mr-2 px-3'
                value={searchTerm} 
                onChange={handleSearchTermChange}
                placeholder='craving something..'
            />
            <button type='button' 
                style={{color:'white'}}
                className='btn btn-sm filter-bg' 
                onClick={()=>updateSearch(searchTerm)}
                >Search</button>
            <button className="btn ml-2 filter-bg" style={{color:'white'}} onClick={resetFilters} > <i className="bi bi-arrow-counterclockwise"></i></button>
        </div>
        </div>
    )
}

export default SearchBar
