import React from 'react'
import DropDown from './DropDown'
function TypeFilter({checkBoxClicked,checkBoxes}) {
    
    return (
       <DropDown checkBoxClicked={checkBoxClicked} checkBoxes={checkBoxes}/>
    )
}

export default TypeFilter
