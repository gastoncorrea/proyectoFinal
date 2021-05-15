import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import Principal from './components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
          <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Principal></Principal>
        </Route>
      </Switch>
          <Footer></Footer>
    </Router>
  );
}

export default App;
