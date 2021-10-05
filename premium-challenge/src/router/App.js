import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
