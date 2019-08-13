import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const HomePage = () => (
  <div>
    This is the Home Page
  </div>
);
const PortfolioPage = () => (
  <div>
    This is the Portfolio Page
  </div>
);

const PortfolioIdPage = () => (
  <div>
    This is the Portfolio ID Page
  </div>
);

const ContactPage = () => (
  <div>
    This is the Contact Page
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioIdPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;