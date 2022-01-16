import React from 'react'
import optionList from '../data/optionList'

function DropDown({checkBoxClicked,checkBoxes}) {
    return (
       
        <div className="dropdown show mr-2">
        <a className="btn white-text filter-bg dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Meals Filter
        </a>
        
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {optionList.map((item,id)=>{
             return (<a key={id} className='dropdown-item'>
             <input type="checkbox" checked={checkBoxes[id]} onChange={()=>checkBoxClicked(id)}/> {item}
             </a>)
          })}
        </div>
      </div>
     
    )
}

export default DropDown
