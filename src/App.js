import {useState} from 'react';

import Table from './Components/Table'
import Items from './Items'
import Pagination from './Components/Pagination'
import FilterNav from './Components/FilterNav'
import NoResult from './Components/NoResult';

function App() {
  const [currentPage,setCurrentPage]=useState(1);
  const [itemsPerPage,setItemsPerPate]=useState(7);
  const [items,setItems]=useState(Items);
  const [sortOrder,setSortOrder]=useState(0);
  
  //Get Current Items
  const indexOfLastItem= currentPage*itemsPerPage;
  const indexOfFirstItem= indexOfLastItem-itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const getSearchResult = (searchTerm)=>{
     //get new result matching search term and then update items 
     console.log('This is search term'+searchTerm)
     if(searchTerm==='') return;
     
     const res = [];
     for(let i=0;i<items.length;i++){
        if(items[i].name.toLowerCase().includes(searchTerm.toLowerCase()))
        res.push(items[i]);
     }
     setItems(res);
  }
  
  const sortPrices = () =>{
        console.log('sort clicked');
       if(sortOrder===0){
          //sort ascending
          items.sort((a,b)=>(a.price<b.price)?1:-1);
          setItems(items);
          setSortOrder(1);
       }else if(sortOrder===1){
         //sort descending
         items.sort((a,b)=>(a.price>b.price)?1:-1);
         setItems(items);
         setSortOrder(0);
       }
  }

  const resetSearch = () => {
    console.log('reset clicked')
    
    setItems(Items);
  }

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Tabulo.io</h1>
       <FilterNav search={getSearchResult} resetSearch={resetSearch}/>
       {items.length!==0?<Table items={currentItems} sortPrices={sortPrices}/>:null}
       {items.length!==0?<Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>:
        <NoResult />}
    </div>
  );
}

export default App;
