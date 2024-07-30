import logo from './logo.svg';
import './App.css';
import VetulizedList from './component/VetulizedList';

function App() {
  const list = Array.from({length:10000}, (_,index)=>{return (index+1)})
  console.log(list)
  return (
    <div className="App">
    <VetulizedList list={list} height={300} width={400} itemHeight={35} />
    </div>
  );
}

export default App;
