import React from 'react'
import TableHeading from './TableHeading';
import TableBody from './TableBody';

function Table({items,sortPrices}) {
    return (
        <table className='table table-striped table-bordered table-hover'>
            <TableHeading headings={items[0]} sortPrices={sortPrices}/>
            <TableBody items={items} />
        </table>
    )
}

export default Table
