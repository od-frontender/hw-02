import { useState, useEffect } from "react";
import Table from './components/Table';
function App() {

  const [animals, setAnimals] = useState([
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: 'penguin', icon: `🐧` },
  ]);
  return (
    <>
      <Table list={animals}/>
    </>
  );
}
export default App;