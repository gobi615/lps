import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProblemsComponent from './problem'
import PremiumComponent from './premium'
import HomeComponent from './home'

function App() {
  return (
    <Switch>
      <Route path="/all/:comp" exact component={ProblemsComponent} />
      <Route path="/all" exact component={ProblemsComponent} />
      <Route path="/prem" exact component={PremiumComponent} />
      <Route path="/" exact component={HomeComponent} />
    </Switch>
  );
}

export default App;
