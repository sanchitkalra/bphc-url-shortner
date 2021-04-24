import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Landing from './pages/Landing'
import Dashboard from './pages/App'
import LinkForward from './pages/LinkForward'
import Auth from "./pages/Auth";
import FAQ from "./pages/FAQ";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/app'>
          <Dashboard />
        </Route>
        <Route exact path='/auth'>
          <Auth />
        </Route>
        <Route exact path='/faq'>
          <FAQ />
        </Route>
        <Route exact path='/:id'>
          <LinkForward />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
