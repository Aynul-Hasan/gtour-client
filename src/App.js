import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import Tour from './component/Tour';
import Footer from './component/Footer';
import About from './component/About';
import Order from './component/private/Order';
import Login from './component/Login';
import Singup from './component/Singup';
import AuthProvider from './context/AuthProvider';
import Privateroute from './component/privateRoute';
import Myorder from './component/private/Myorder';
import Deshlogin from './deshbord/Deshlogin';
import Dashboard from './deshbord/Dashboard';
import Allorder from './deshbord/Allorder';


function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tour" component={Tour} />
        <Route exact path="/about" component={About} />
        <Privateroute  path="/order/:id">
            <Order/>
      </Privateroute>
      <Privateroute  path="/myorder">
            <Myorder/>
      </Privateroute>
        <Route exact path="/login" component={Login} />
        <Route exact path="/singup" component={Singup} />
        <Route exact path="/deshlogin" component={Deshlogin} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/allorder" component={Allorder} />
        



      </Switch>
      <Footer/>
    </Router>
    </AuthProvider>
     
    </>
  );
}

export default App;
