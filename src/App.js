import './App.css';
import Manubar from './components/Allproducts/Manubar/Manubar';
import Allproducts from './components/Allproducts/Allproducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "aos/dist/aos.css"

function App() {
  const [count, setCount] = useState(0)
  const plus = () => setCount(count + 1)

  return (
    <div className="App ">
      <Manubar count={count}></Manubar>
      <Allproducts counter={plus}></Allproducts>
    </div>
  );
}

export default App;
