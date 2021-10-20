import  { useContext } from "react";
import {AuthContext} from "../Context/AuthProvider";
// creating auth
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
