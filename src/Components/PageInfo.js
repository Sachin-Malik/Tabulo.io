import React from 'react'

function PageInfo({pageInfo}) {
    return (
        <caption style={{color:'black'}}>
            Showing {pageInfo.firstIndex+1} - {Math.min(pageInfo.totalItems,pageInfo.firstIndex+pageInfo.itemsPerPage+1)} of {pageInfo.totalItems}
        </caption>
    )
}

export default PageInfo
