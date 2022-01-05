import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from "./views/Auth/Auth";
import Home from "./views/Home/Home";

export default function App() {
  return (
  <Router>
    <Header />
    <Switch>
      <Route path='/login'>
        <Auth />
      </Route>
      <PrivateRoute path='/'>
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>
  )
}
