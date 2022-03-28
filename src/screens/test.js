import "./App.css";
import AppNavContainer from "./navigations/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLayoutEffect, useState } from "react";
AOS.init();

function App() {
  const [caseSensitive, setCaseSensitive] = useState(true)
  const [highlighted, setHighlighted] = useState("");
  const [result, setResult] = useState("");

  useLayoutEffect(()=>{
    var finalResult = document.getElementById("result");
    finalResult.innerHTML= result.replace(/\s+/g, ' ').trim()
    let message
    if (highlighted !== ""){
      if (!caseSensitive){
         result.ca
      }else{
        message = result.replace(highlighted,"<mark>"+highlighted+"</mark>")
      }
      finalResult.innerHTML= message.replace(/\s+/g, ' ').trim()
    }
  },[caseSensitive, highlighted, result])

  return (
    <>
      {/* <Provider store={store}>
        <AppNavContainer />
      </Provider> */}
      <form>
        <textarea onChange={(e)=>setResult(e.target.value)} data-testid="source-text" /><br/>
        <input data-testid="search-term" onChange={(e)=>setHighlighted(e.target.value)} /><br />
        <label >Case Sensitive </label>
        <input id="check" type="checkbox" onChange={()=>setCaseSensitive(prev => !prev)} defaultChecked data-testid="case-sensitive" /><br />
      </form>
      <div id="result" data-testid="result"></div>
    </>
  );
}

export default App;
