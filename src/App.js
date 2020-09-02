import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Movies from './pages/Movies/Movies';
import TVShows from './pages/TVShows/TVShows';
import Latest from './pages/Latest/Latest';
import MyList from './pages/MyList/MyList';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Signin}/>
      <Route exact path='/browse' component={Home}/>
      <Route  path='/browse/genres/:tid' component={TVShows}/>
      <Route  path='/browse/genres/:mid' component={Movies}/>
      <Route  path='/browse/latest' component={Latest}/>
      <Route  path='/browse/my-list' component={MyList}/>
      </Switch>
      <Footer/>
      </Router>
  );
}

export default App;
