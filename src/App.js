import Table from './Components/Table'
import Items from './Items'
function App() {
  return (
    <div className="container">
      <h1 className="mt-5 text-center">Tabulo.io</h1>
       <Table items={Items}/>
    </div>
  );
}

export default App;
