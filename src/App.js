import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Almacen from './pages/paquetes/almacen';
import Paquetes from './pages/paquetes/paquetes';
import PaquetesEnviados from './pages/paquetes/paquetesEnviados';
import Facturas from './pages/facturas/facturas';
import PaqueteCreate from './pages/paquetes/create';

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
          <Route path="/paquetes" exact>
            <Paquetes />
          </Route>
        </Switch>
        <Switch>
          <Route path="/paquetes/almacen" exact>
            <Almacen />
          </Route>
        </Switch>
        <Switch>
          <Route path="/paquetes/enviados" exact>
            <PaquetesEnviados />
          </Route>
        </Switch>
        <Switch>
          <Route
            path={[
              '/paquetes/create',
              '/paquetes/enviados/create',
              '/paquetes/almacen/create',
            ]}
            exact
          >
            <PaqueteCreate />
          </Route>
        </Switch>
        <Switch>
          <Route path="/facturas" exact>
            <Facturas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
