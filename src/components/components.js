import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './HomeBeta';
import Article from './Article';
import About from './About';
import Terms from './Terms';
import Contact from './Contact';
import Search from './Search';
import getData from './API';
const Components = () => (
     <Router>
        <header class="bg-gray">
            <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">  <i class="material-icons">cloud</i>Drupal+ReactJS</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/search'}>Search</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/terms'}>Terms</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/terms' component={Terms} />
                <Route exact path='/contact' component={Contact} />
                <Route path='/article/:id/:name' component={Article} />
                <Route path='/search' component={Search} />
            </Switch>
        </header>
         
      </Router>
     
);

export default Components

