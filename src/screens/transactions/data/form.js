import { useState } from "react";
import Button from "../../../components/customButton/button";
import Input from "../../../components/input/input";

function DataSubscriptionForm(){
    const [state, setState] = useState();
  const handleChange = (event) => {
    setState(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your favorite flavor is: " + state);
  };
  return (
    <div
      style={{
        width: "100%",
        boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.1)",
        height: 500,
      }}
    >
      <form
        onSubmit={(event) => handleSubmit(event)}
        style={{height: "100%"}}
        className="d-flex flex-column justify-content-between px-4"
      >
        <div className="d-flex flex-column justify-content-around" style={{height: 80,}}>
          <label>Network Provider</label>
          <select value={state} onChange={(event) => handleChange(event)} style={{background: "transparent", height: 40, border: "none"}}>
            <option value="">--Select Network--</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        
        <textarea title="Phone Number" placeholder="Enter Phone" />
        
        <Input height={40} br="rgba(0,0,0,0.1)" required title="Amount" placeholder="Enter Amount" />
        
        <Input height={40} br="rgba(0,0,0,0.1)" required title="Phone Number" placeholder="type here" />

        <Button title="proceed" height={50} bg="#4723d9" mb={40} color="#fff" />
      </form>
    </div>
  );
}

export default DataSubscriptionForm