import { Spinner } from "react-bootstrap";
import {Route,Redirect} from "react-router-dom"
import useAuth from "../Hooks/useAuth"
// creating  private route
function PrivateRoute({ children, ...rest }) {
    const {user,loading} = useAuth();
    if(loading){
      
  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
      

    };
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute