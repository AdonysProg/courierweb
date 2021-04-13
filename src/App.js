import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Almacen from './pages/almacen';
import Facturas from './pages/facturas';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/almacen">
            <Almacen />
          </Route>
        </Switch>
        <Switch>
          <Route path="/facturas">
            <Facturas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
