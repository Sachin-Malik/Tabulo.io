import React from 'react'

function TableHeading({headings}) {
    const heading=Object.keys(headings);
    return (
          <thead className='thead-dark'>
              <tr>
                {heading.map((colHead,id)=>{
                return <th key={id} scope="col">{colHead}</th>
                })}
              </tr>
          </thead>
    )
}

export default TableHeading
