import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {Nav} from './components/Nav';
import {Login} from './components/Login';
import {Root} from './components/Root';
import {Index} from './components/Index';
import { useUsuario } from './context/UserContext';

function App() {

  const {login} = useUsuario()
  const validar = () => {
    if(login){
      return true
    } else {
      return false
    }
  }

  const Private = (props) => {
    return validar() ? <Route {...props}/> : <Redirect to='/'/>;
  };

  const Public = (props) => {
    return validar() ? <Redirect to='/root'/> : <Route {...props}/>;
  };

  return (
    <Router>
      <Nav/>
      <Switch>
        <Public path='/' exact component={Login}/>
        <Private path='/root' exact component={Root}/>
        <Private path='/index' exact component={Index}/>
      </Switch>
    </Router>
  );
}

export default App;
