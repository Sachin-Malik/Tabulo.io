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
                placeholder='Have something on mind'
            />
            <button type='button' 
                className=' btn btn-sm btn-primary ml-2' 
                onClick={()=>updateSearch(searchTerm)}
                >Search</button>
            <button className="btn btn-primary ml-2" onClick={resetFilters} > <i className="bi bi-arrow-counterclockwise fa-5x"></i></button>
        </div>
        </div>
    )
}

export default SearchBar
