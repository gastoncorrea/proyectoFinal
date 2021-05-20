import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import Principal from './components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categoria from './components/Categoria';
import Detalle from './components/Detalle';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
          <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Principal></Principal>
        </Route>
        <Route exact path='/categoria'>
          <Categoria></Categoria>
        </Route>
        <Route exact path='/noticia'>
          <Detalle></Detalle>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/admin'>
          <Admin></Admin>
        </Route>
      </Switch>
          <Footer></Footer>
    </Router>
  );
}

export default App;
