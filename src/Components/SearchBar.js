import React,{useState} from 'react'

function SearchBar({search,resetSearch}) {
    const [searchTerm,setSearchTerm]=useState('');
    
    const handleSearchTermChange=(event)=>{
        setSearchTerm(event.target.value);
    }

    const handleOnSubmitForSearch=()=>{
        const term=searchTerm;
        setSearchTerm('');
        search(term);
    }

    return (
        <div className='row'>
            <input type='text' className='mr-2 px-3'
                value={searchTerm} 
                onChange={handleSearchTermChange}
                placeholder='Have something on mind'
            />
            <button type='button' 
                className=' btn btn-sm btn-primary mx-2' 
                onClick={handleOnSubmitForSearch}
                >Search</button>
            <button className="btn btn-primary mr-2"> <i onClick={resetSearch} className="bi bi-arrow-counterclockwise fa-5x"></i></button>
        </div>
    )
}

export default SearchBar
