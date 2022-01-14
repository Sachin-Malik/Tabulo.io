import React from 'react'
import DropDown from './DropDown'
import ItemsPerPage from './ItemsPerPage'

function TypeFilter({checkBoxClicked,checkBoxes,itemsPerPage,updateItemsPerPage}) {
    
    return (
        <div className='col'>
         <div className='row justify-content-start'>
         <DropDown checkBoxClicked={checkBoxClicked} checkBoxes={checkBoxes}/>
         <ItemsPerPage itemsPerPage={itemsPerPage} updateItemsPerPage={updateItemsPerPage}/>
        </div>
       </div>
    )
}

export default TypeFilter
