import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/Error/Error';
import Profile from './pages/Profile/Profile';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user[0]);
      }
    });
  }, []);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={() => <Profile user = {user}/>}/>
        <Route exact path="*" component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
