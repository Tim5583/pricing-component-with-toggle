import './App.css';
import { useState } from 'react';
import Card from './components/card';
import Header from "./components/header";
import data from "./data.json"

function App() {
  const [parmentOpt, setParmentOpt] = useState("monthly");

  const handlePamentOpt = () =>  {
    setParmentOpt(opt => {
      let pack = opt;
      if (opt === "monthly") {
        pack = "annually";
      } else {
        pack = "monthly";
      }
      return pack;
    });
  };

  return (
    <>
    <Header setParmentOpt={handlePamentOpt}/>
    <div className='container'>
    {data.data.map(item => <Card data={item} key={item.plan} parmentOpt={parmentOpt}/>)}
    </div>
    </>
  );
}

export default App;
