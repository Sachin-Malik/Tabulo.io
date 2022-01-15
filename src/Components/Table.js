import React from 'react'
import TableHeading from './TableHeading';
import TableBody from './TableBody';
import PageInfo from './PageInfo'
function Table({items,sortPrices,pageInfo}) {
    return (
        <table className='table table-striped table-hover table-bg mb-0'>
            <PageInfo pageInfo={pageInfo}/>
            <TableHeading headings={items[0]} sortPrices={sortPrices}/>
            <TableBody items={items} />
        </table>
    )
}

export default Table
