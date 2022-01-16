import React from 'react'

function Pagination({itemsPerPage,totalItems,paginate}) {
    const pageNumber =[];

    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumber.push(i);
    };

    return (
        <nav>
            <ul className="pagination">
            {pageNumber.map((number,id)=>(
               <li key={id} className='page-item'>
                   <a href="#top" onClick={()=>paginate(number)} className='page-link'>{number}</a>
               </li>
            ))}
            </ul>
        </nav>
    )
}

export default Pagination
