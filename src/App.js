import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import Principal from './components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categoria from './components/Categoria';
import Detalle from './components/Detalle';
import Login from './components/Login';
import Admin from './components/Admin';
import Listant from './components/Listant';
import Listact from './components/Listact';
import ListaUnact from './components/ListaUnact'
import NuevaNoticia from './components/NuevaNoticia';
import Suscripcion from './components/Suscripcion';
import Editar from './components/Editar';

function App() {
  const [habilitarAdmin, setHabilitarAdmin] = useState(false);
  const [producto, setProducto] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(()=>{
    // llamar a la api
    pedirDatos();
  }, []);


  const pedirDatos = async ()=> {
    try{
      const datosGral = await fetch(URL);
      const datosFinos = await datosGral.json();
      if(datosGral.status === 200){
        setProducto(datosFinos);
        console.log('todo ok');
      }
    }catch(e){
      console.log(e);
      console.log('todo mal');
    }
  }


  
  const habilitar = () => {
    setHabilitarAdmin(true);
  }
  const desHabilitar = () => {
    setHabilitarAdmin(false);
  }

  return (
    <Router>
          <Navegacion habilitarAdmin={habilitarAdmin}></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Principal productos={producto} ></Principal>
        </Route>
        <Route exact path='/suscripcion'>
          <Suscripcion></Suscripcion>
        </Route>
        <Route exact path='/categoria/:nombre'>
          <Categoria productos={producto}></Categoria>
        </Route>
        <Route exact path='/detalle-noticia/:id'>
          <Detalle></Detalle>
        </Route>
        <Route exact path='/login'>
          <Login habilitar={habilitar} deshabilitar={desHabilitar}></Login>
        </Route>
        <Route exact path='/admin'>
          <Admin></Admin>
        </Route>
        <Route exact path='/admin/lista-noticia'>
          <Listant productos={producto} pedirDatos={pedirDatos}></Listant>
        </Route>
        <Route exact path='/admin/ver-categoria'>
          <Listact ></Listact>
        </Route>
        <Route exact path='/admin/ver-categoria/lista-categoria'>
          <ListaUnact></ListaUnact>
        </Route>
        <Route exact path='/admin/nueva-noticia'>
          <NuevaNoticia pedirDatos={pedirDatos}></NuevaNoticia>
        </Route>
        <Route exact path='/admin/editar/:id'>
          <Editar pedirDatos={pedirDatos}></Editar>
        </Route>
      </Switch>
          <Footer></Footer>
    </Router>
  );
}

export default App;
