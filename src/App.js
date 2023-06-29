import React from "react";
import './App.css';
import VerticalNavbar from './components/VerticalNavbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/component";

function App() {
  return (
    <div className="App">
        <VerticalNavbar />
      <Header />

    </div>
  );
}

export default App;
