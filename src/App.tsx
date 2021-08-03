import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ListProducts from './components/listProducts';
import Product from './components/product';
import store from './store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ListProducts></ListProducts>
        <Product></Product>
      </Provider>
    </div>
  );
}

export default App;
