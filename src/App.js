import './App.css';
import Registration from './component/registration/registration'
import Login from './component/login/login'
import DashBoard from './component/DashBoard/DashBoard'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashBoard" component={DashBoard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
