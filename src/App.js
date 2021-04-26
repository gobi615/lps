import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProblemsComponent from './problem'

function App() {
  return (
    <Switch>
      <Route path="/all" exact component={ProblemsComponent} />
      {/* <Route path="/" component={HomeComponent} /> */}
    </Switch>
  );
}

export default App;
