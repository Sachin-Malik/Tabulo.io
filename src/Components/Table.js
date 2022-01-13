import React from 'react'
import TableHeading from './TableHeading';
import TableBody from './TableBody';

function Table(props) {
    return (
        <table className='table table-striped table-bordered table-hover'>
            <TableHeading headings={props.items[0]}/>
            <TableBody items={props.items}/>
        </table>
    )
}

export default Table
