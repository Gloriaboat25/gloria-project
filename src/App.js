import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from './comps/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" component={HomePage}/>
      
      </div>

    </BrowserRouter>
    
  );
}

export default App;
