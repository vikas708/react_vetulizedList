import logo from './logo.svg';
import './App.css';
import Tab from './Component/Tab';
const tab = [{
  label: "Profile",
  content: "Profile info",
},
{
  label:"Dashobard",
  content:"Dashobard button"
},
{
  label:"setting",
  content:"setting info"
},{
  label: "invoice",
  content:"invoice info"
}
]
function App() {
  return (
    <div className="App">
      <Tab  tab={tab} />
    </div>
  );
}

export default App;
