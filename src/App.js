import Table1 from './components/Table1'
import data from './data/mockup.json'

function App() {
  return (
    <div className="App">
      <Table1 rows={data}/>
    </div>
  );
}

export default App;
