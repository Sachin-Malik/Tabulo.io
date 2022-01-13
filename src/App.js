import {useState} from 'react';

import Table from './Components/Table'
import Items from './Items'
import Pagination from './Components/Pagination'
function App() {

  const [currentPage,setCurrentPage]=useState(1);
  const [itemsPerPage,setItemsPerPate]=useState(10);

  //Get Current Items
  const indexOfLastItem= currentPage*itemsPerPage;
  const indexOfFirstItem= indexOfLastItem-itemsPerPage;
  const currentItems = Items.slice(indexOfFirstItem,indexOfLastItem);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Tabulo.io</h1>
       <Table items={currentItems}/>
       <Pagination itemsPerPage={itemsPerPage} totalItems={Items.length} paginate={paginate}/>
    </div>
  );
}

export default App;
