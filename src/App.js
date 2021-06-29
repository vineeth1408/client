import React from 'react';
import './App.css'
import GlobalStyle from './globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Navbar, Footer} from './components';
import Home from './Pages/HomePage/Home';

import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn/SignIn';
import FormSignUp from './Pages/SignUp/FormSignUp';
import About from './Pages/About Us/AboutUs';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutUs' exact component={About}/>
          <Route path='/Contact' exact component={Contact} />
          <Route path='/SignIn' exact component={SignIn} />
          <Route path='/SignUp' exact component={FormSignUp} />
          <Route> <ErrorPage /></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
