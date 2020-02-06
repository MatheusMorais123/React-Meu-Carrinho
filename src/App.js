import React from 'react';
import './layout.css';
import './app.css';
function App() {
  return (
    <div id="app">
      <div className="container">
      <aside>
          <strong>  Meu Carrinho</strong>
          <div className="separator"/>
          <div className="box">
            <div className="left">

            </div>
            <div className="right">
                <div className="title">
                    <p>Trufa de Morango</p>  
                </div>
                <div className="price">
                    <p>R$20,00</p>
                    <b>R$1,99</b>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="left">

            </div>
            <div className="right">
                <div className="title">
                    <p>Trufa de Morango</p>  
                </div>
                <div className="price">
                    <p>R$20,00</p>
                    <b>R$1,99</b>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="left">

            </div>
            <div className="right">
                <div className="title">
                    <p>Trufa de Morango</p>  
                </div>
                <div className="price">
                    <p>R$20,00</p>
                    <b>R$1,99</b>
                </div>
            </div>
          </div>
          <div className="separator"/>
            <div className="price-end">
                <div className="left">
                  <p>Total</p>
                </div>
                <div className="right">
                  <p>R$9,90</p>
                </div>
            </div>
            <button className="free" type="submit">Parabens, sua compra tem frete grátis!</button>  
            <div className="separator"/>
            <button type="submit">Finalizar Compra</button>          
      </aside>
    </div>
    </div>
  );
}

export default App;
