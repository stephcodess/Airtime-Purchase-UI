
import { BrowserRouter as Router } from "react-router-dom";
import AuthNavigator from "./authNavigator";
import HomeNavigator from "./homeNavigator";
const AppNavContainer = () => {
  const user = localStorage.getItem('authToken');
   return !user ?
   <Router><HomeNavigator /> </Router>:
   <Router><AuthNavigator /></Router>
};

export default AppNavContainer;
