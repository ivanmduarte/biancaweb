import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Conteudo from './components/Views/Conteudo';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Carousel />
        <Conteudo />
      </main>
    </div>
  );
}
export default App;
