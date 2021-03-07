import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Invoices } from './components/Invoices';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to='/'>
          <Invoices />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
