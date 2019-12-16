import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';


class App extends Component {
  render() {
    return (
        
      <Router>
        <div>
          <Navbar />
          <Route exact path="/"  component={Home} />
          <Route path="/about"   component={About} />
          <Route path="/news"    component={News} />
          <Route path="/blog"    component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Footer />
        </div>
        </Router>

    );
  }
}

export default App;
