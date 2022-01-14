import React from 'react'
import optionList from '../optionList'

function DropDown({checkBoxClicked,checkBoxes}) {
    return (
        <div className='col'>
        <div className='row justify-content-start'>
        <div className="dropdown show">
        <a className="btn btn-secondary dropdown-toggle" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Meals Filter
        </a>
        
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {optionList.map((item,id)=>{
             return (<a key={id} className='dropdown-item' href='!#'>
             <input type="checkbox" checked={checkBoxes[id]} onChange={()=>checkBoxClicked(id)}/> {item}
             </a>)
          })}
        </div>
      </div>
      </div>
      </div>
    )
}

export default DropDown
