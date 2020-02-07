import React, { useState, useEffect} from 'react';
import './layout.css';
import './app.css';

import abaixo10 from './api/abaixo-10-reais.json'
import acima10 from './api/acima-10-reais.json'

function App() {

  const [items, setItems] = useState([])
  const [value, setValue] = useState(0);

  useEffect(() => {
    function loadApi() {
      setItems(abaixo10.items);
    }

    loadApi();
  }, []);

  useEffect(() => {
    function loadValue() {
      setValue(items.reduce(sumValue, 0))
    }

    loadValue()
  }, [items])

  const sumValue = (item, newItem) => {
    return item + (newItem.price / 100)
  }

  return (
    <div id="app">
      <div className="container">
        <aside>
          <strong>  Meu Carrinho</strong>
          <div className="separator" />
          {items.map(e => (        
            <div className="box">
              <div className="left">
                <img src={e.imageUrl} width="100px" height="92px" alt={e.name}></img>
              </div>
              <div className="right">
                <div className="title">
                  <p>{e.name}</p>
                </div>
                <div className="price">
                  <p>R${e.price / 100}</p>
                  <b>R${e.sellingPrice / 100}</b>
                </div>
              </div>
            </div>

          ))}
          <div className="separator" />
          <div className="price-end">
            <div className="left">
              <p>Total</p>
            </div>
            <div className="right">
              <p>{value.toFixed(2)}</p>
            </div>
          </div>
          {value > 10 &&
            <button className="free" type="submit">Parabens, sua compra tem frete grátis!</button>
          }
          <div className="separator" />
          <button type="submit">Finalizar Compra</button>
        </aside>
      </div>
    </div>
  );
}

export default App;
