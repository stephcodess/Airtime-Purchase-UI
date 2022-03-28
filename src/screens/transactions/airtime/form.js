import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../../components/customButton/button";
import Input from "../../../components/input/input";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { airtimeAction } from "../../../store/actions/airtime";

function AirtimePurchaseComponentForm() {
  const [network, setnetwork] = useState("mtn")
  const [amount, setamount] = useState(0)
  const [recipient, setrecipient] = useState("")
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch();
  const Airtime = useSelector((s)=>s.airtime)

  const airtiemdata = {
    "network": network,
    "amount": amount,
    "recipent": recipient,
    "ported": true
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(airtimeAction(airtiemdata))
  };

  useEffect(()=>{
    if (Airtime.isSuccessful){
      setSuccess(true);
    }
  })

  return (
    <div
      className="bg-white"
      style={{
        width: "100%",
        // boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.1)",
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
          <select value={network} onChange={(event) => setnetwork(event.target.value)} style={{background: "transparent", height: 40, border: "none"}}>
            <option value="">--Select Network--</option>
            <option value="grapefruit">glo</option>
            <option value="lime">mtn</option>
            <option value="coconut">airtel</option>
          </select>
        </div>
        
        <Input pl={15} height={40} onChangeText={(e)=>setrecipient(e.target.value)} br="rgba(0,0,0,0.1)" required title="Phone" placeholder="Recipient Phone Number" />
        
        <Input pl={15} height={40} onChangeText={(e)=>setamount(e.target.value)} br="rgba(0,0,0,0.1)" required title="Amount" placeholder="Enter Amount" />

        <Button type="submit" title="proceed" height={50} bg="#4723d9" mb={40} color="#fff" />
      </form>
    </div>
  );
}

export default AirtimePurchaseComponentForm;
