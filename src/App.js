import React from 'react';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";
import Resume from "./pages/Resume"
import { BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/pdf.html" component={Resume} />
      </Router>
    </div>
  );
  }

export default App;