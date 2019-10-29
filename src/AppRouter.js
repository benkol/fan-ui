import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home';
import Picture from './routes/Picture';
import './App.css';

const AppRouter = () => (
  <Router>
    <span>
      <Route path="/picture*" component={Picture} />
      <Route exact path="/home" component={Home} />
    </span>
  </Router>
);

export default AppRouter;
