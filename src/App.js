import React from "react";
import './App.css';
import Header from './components/Header.js'
import VerticalNavbar from './components/VerticalNavbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <VerticalNavbar />
      <Header />

    </div>
  );
}

export default App;
