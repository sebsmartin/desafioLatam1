import React from 'react';
import './App.css';
import List from './views/list/list';

function App() {
  return (
    <div className="App">      
     <List/>                
    </div>
  );
}

export default App;


/*
funcion

function a(n1, n2) {
  return n1 + n2;
}

funcion flecha refactorizada
const a = (n1, n2) => {
  return n1 + n2;
};

funcion
[1,2,3,4,5].map(function(e) {
  return {
    numero: e,
  };
})

funcion flecha refactorizada
[1,2,3,4,5].map(e => ({ numero: e }))
*/


