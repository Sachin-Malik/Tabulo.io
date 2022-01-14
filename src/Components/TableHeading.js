import React from 'react'

function TableHeading({headings,sortPrices}) {
    const heading=Object.keys(headings);
    return (
      <thead className='thead-dark'>
          <tr>
            {heading.map((colHead,id)=>{
            return <th key={id} scope="col">{colHead} {colHead==='price'?<i onClick={sortPrices} className="sort-arrow bi bi-arrow-down-up ml-3"></i>:null}</th>
            })}
          </tr>
      </thead>
    )
}

export default TableHeading
