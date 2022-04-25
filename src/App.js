import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [producto, setProducto] = useState();

  const getPro = async() => {
  const api = await fetch("http://api.com/producto");
  const result = await api.json();
  console.log(result.producto);
  setProducto(result.producto);
  }

  useEffect(async() => {
    await getPro();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {producto.map((producto,index)=>{
          return(
            <div key={producto.idpro}>
              <h6>{producto.nombre}</h6>
            </div>
          )
          
        })}
        <button onClick={getPro}>dsds</button>
      </header>
    </div>
  );
}

export default App;
