import {useState} from 'react';

import Table from './Components/Table'
import Items from './Items'
import Pagination from './Components/Pagination'
import FilterNav from './Components/FilterNav'
import NoResult from './Components/NoResult'
import DropDownOptions from './optionList'

function App() {

  const [currentPage,setCurrentPage]=useState(1);
  const [itemsPerPage,setItemsPerPate]=useState(7);
  const [searchTerm,setSearchTerm]=useState('');
  const [sortOrder,setSortOrder]=useState(0);
  const [checkBoxes,setCheckBoxes]=useState([true,true,true,true]);
   
  const objMap = {};
  for(let i=0;i<DropDownOptions.length;i++)
    objMap[DropDownOptions[i]]=i;
  
  var items=Items;
    
  if(searchTerm!==''){
    const res = [];
    for(let i=0;i<items.length;i++){
       if(items[i].name.toLowerCase().includes(searchTerm.toLowerCase()))
       res.push(items[i]);
    }
    items=res;
  }
 
  //handle typefilter Change
  const temp = [];
  for(let i=0;i<items.length;i++){
     if(checkBoxes[objMap[items[i].type]]===true){
     temp.push(items[i]);
     }
  }
  items=temp;

  // handle sort change
  if(sortOrder===1){
    items.sort((a,b)=>(a.price<b.price)?1:-1);
  }else if(sortOrder===2){
    items.sort((a,b)=>(a.price>b.price)?1:-1);
  }

  const indexOfLastItem= currentPage*itemsPerPage;
  const indexOfFirstItem= indexOfLastItem-itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);
  
  var currentPageInfo= {
     firstIndex:indexOfFirstItem,
     itemsPerPage:itemsPerPage,
     totalItems:items.length
  }
  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
 
  const updateSearchTerm = (term)=>{
    console.log(term+' query')
     setSearchTerm(term);
  }
  
  const updateCheckBoxes = (index)=>{
      //TODO: find some other solution. two setState function. redndering twice.
      setCurrentPage(1);
      const newConfiguration=[];
      for(let i=0;i<checkBoxes.length;i++){
         newConfiguration.push(i===index?!checkBoxes[i]:checkBoxes[i])
      }
     setCheckBoxes(newConfiguration);
  }

  const sortPrices = () =>{
       if(sortOrder===0){
          setSortOrder(1);
       }else if(sortOrder===1){
         setSortOrder(2);
       }else{
         setSortOrder(0);
       }
  }
  
  const resetFilters = () =>{
       console.log('Reset Filter');
       setSearchTerm('');
       setCheckBoxes(new Array(DropDownOptions.length).fill(true));
  }

  return (
    <div className="container">
      <h1 className="my-5 text-center">Tabulo.io</h1>
       <FilterNav checkBoxClicked={updateCheckBoxes} checkBoxes={checkBoxes} updateSearch={updateSearchTerm} resetFilters={resetFilters}/>
       {items.length!==0?<Table items={currentItems}  sortPrices={sortPrices} pageInfo={currentPageInfo}/>:null}
       {items.length!==0?<Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>:
        <NoResult />}
    </div>
  );
}

export default App;
