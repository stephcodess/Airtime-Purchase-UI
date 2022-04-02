import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AIRTIME,
  ALLPOSTS,
  ALLPRODUCTS,
  ALLUSERS,
  CREATEPOST,
  CREATEPRODUCT,
  DASHBOARD,
  DATASUB,
  ELECTRICITY,
  FUNDWALLET,
  HOME,
  PRODUCTS,
} from "../constants/routeNames";
import AllPostWrapper from "../screens/admin/allPosts";
import PostWrapper from "../screens/admin/createPost";
import AllProductWrapper from "../screens/admin/products/allProducts";
import ProductsWrapper from "../screens/admin/products/createProduct";
import AllUserWrapper from "../screens/admin/users";
import DashboardScreen from "../screens/dashboard";
import FidpressCommerce from "../screens/ecommerce";
import HomeScreen from "../screens/home";
import AirtimePurchaseComponent from "../screens/transactions/airtime";
import DataSubscription from "../screens/transactions/data";
import ElectricityPurchaseComponent from "../screens/transactions/electricity";
import FundWallet from "../screens/transactions/fundWallet";
// import DatabaseDetailScreen from "../screens/myorganization/websites/database";

/**
 * This Navigator components states the navigation screen to be made available when user is signed in
 * @class AuthNavigator
 * @returns Navigator element
 */
const AuthNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route path={DASHBOARD}>
          <DashboardScreen />
        </Route>
        <Route path={ALLPOSTS}>
          <AllPostWrapper />
        </Route>
        <Route path={DATASUB}>
          <DataSubscription />
        </Route>
        <Route path={AIRTIME}>
          <AirtimePurchaseComponent />
        </Route>
        <Route path={FUNDWALLET}>
          <FundWallet />
        </Route>
        <Route path={ALLUSERS}>
          <AllUserWrapper />
        </Route>
        <Route path={PRODUCTS}>
          <FidpressCommerce />
        </Route>
        <Route path={CREATEPOST}>
          <PostWrapper />
        </Route>
        <Route path={ALLPRODUCTS}>
          <AllProductWrapper />
        </Route>
        <Route path={CREATEPRODUCT}>
          <ProductsWrapper />
        </Route>
        <Route path={ELECTRICITY}>
          <ElectricityPurchaseComponent />
        </Route>
        <Route path={HOME}>
          <HomeScreen />
        </Route>
        
      </Switch>
    </Router>
  );
};

export default AuthNavigator; //to make component available for import in other components
