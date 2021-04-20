import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Almacen from './pages/paquetes/almacen';
import Paquetes from './pages/paquetes/paquetes';
import PaquetesEnviados from './pages/paquetes/paquetesEnviados';
import Facturas from './pages/facturas/facturas';
import PaqueteCreate from './pages/paquetes/create';
import Destinatario from './pages/clientes/destinatario';
import CreateDestinatario from './pages/clientes/create';
import EditDestinatario from './pages/clientes/editDestinatario';
import EditRemitente from './pages/clientes/editRemitente';
import Remitente from './pages/clientes/remitente';
import CreateRemitente from './pages/clientes/createRemitente';
import EditarPaquete from './pages/paquetes/edit';

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
        <Switch>
          <Route path="/destinatario" exact>
            <Destinatario />
          </Route>
        </Switch>
        <Switch>
          <Route path="/destinatario/create" exact>
            <CreateDestinatario />
          </Route>
        </Switch>
        <Switch>
          <Route path="/destinatario/edit/:id" exact>
            <EditDestinatario />
          </Route>
        </Switch>
        <Switch>
          <Route path="/remitente/create" exact>
            <CreateRemitente />
          </Route>
        </Switch>
        <Switch>
          <Route path="/remitente" exact>
            <Remitente />
          </Route>
        </Switch>
        <Switch>
          <Route path="/remitente/edit/:id" exact>
            <EditRemitente />
          </Route>
        </Switch>
        <Switch>
          <Route path="/paquetes/edit/:id" exact>
            <EditarPaquete />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
