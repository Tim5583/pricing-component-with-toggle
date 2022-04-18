import './App.css';
import Card from './components/card';
import Header from "./components/header";
import data from "./data.json"

function App() {
  return (
    <>
    <Header/>
    <div className='container'>
    {data.data.map(item => <Card data={item} key={item.plan}/>)}
    </div>
    </>
  );
}

export default App;
