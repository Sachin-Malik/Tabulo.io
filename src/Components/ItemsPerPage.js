import React from 'react'
import ItemsPerPageOptions from '../data/ITEM_PER_PAGE'

function ItemsPerPage({itemsPerPage,updateItemsPerPage}) {
    console.log('current items'+itemsPerPage)
    return (
        <select className="form-select px-2" value={itemsPerPage} onChange={(e)=>updateItemsPerPage(e.target.value)} aria-label="Default select example">
        <option val={itemsPerPage}>{itemsPerPage}</option>
        {ItemsPerPageOptions.map((val,id)=>{
          return <option key={id} selected={itemsPerPage} value={val}>{val}</option>
        })}
      </select>
    )
}

export default ItemsPerPage
