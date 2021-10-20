import 'bootstrap/dist/css/bootstrap.min.css';
// React componet adding
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Signin from './Pages/Sign/Signin/Signin';
import Signup from './Pages/Sign/Signup/Signup';
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import Details from "./Pages/Details/Details"

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            </Route>
          <Route path="/home">
            <Home></Home>
            </Route>
          <Route path="/about">
            <About></About>
            </Route>
          <Route path="/signin">
            <Signin></Signin>
            </Route>
          <Route path="/signup">
            <Signup></Signup>
            </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/details/:id">
              <Details></Details>
              </PrivateRoute>
            <Route path="*">
            <Notfound></Notfound>
            </Route>
        </Switch>
        <Footer></Footer>
        </Router>
    </AuthProvider>  
    </div>

  );
}

export default App;
