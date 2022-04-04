
import './App.css';
import AppNavContainer from './navigations/index';
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from 'react-redux';
import store from './store';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
AOS.init();

function App() {
  useEffect(()=>{
    fetch("https://fidpress-api.herokuapp.com/").then((res)=>{return res.json()}).then((me)=>console.log(me))
  },[])
  return (
    <Provider store={store}>
      <AppNavContainer />
    </Provider>
  );
}

export default App;
