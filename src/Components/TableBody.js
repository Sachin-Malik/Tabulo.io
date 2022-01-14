import React from 'react'
function TableBody({items}) {
    const values= [];
   
    for(var i=0;i<items.length;i++){
        const val=Object.values(items[i]);
        values.push(val);
    }

    return (
        <tbody className='table'>
             {values.map((row,idr)=>{
                 return  (
                     <tr key={idr}>
                     {row.map((item,id)=>{
                      return <td key={id}>{item}</td>
                      })}
                    </tr>)
             })}
        </tbody>
    )
}

export default TableBody
