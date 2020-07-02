import React from 'react';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
  }

export default App;