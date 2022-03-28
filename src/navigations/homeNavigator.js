import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HOME,
  LOGIN,
  REGISTER,
} from "../constants/routeNames";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login/login";
import RegisterComponent from "../screens/register/register";
const HomeNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route path={REGISTER}>
          <RegisterComponent />
        </Route>
        <Route path={LOGIN}>
          <LoginScreen />
        </Route>
        <Route path={HOME}>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default HomeNavigator;
