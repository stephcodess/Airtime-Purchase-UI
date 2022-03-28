import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/customButton/button";
import { loggedInUser } from "../../store/actions/users";

function DashboardHeader(props) {
  const dispatch = useDispatch();
  const currentuser = useSelector((e)=>e.users);
  const [userBal, setUSerBal] = useState(0);
  useEffect(()=>{
    dispatch(loggedInUser({
      email: localStorage.getItem("authUser")
    }))
  },[dispatch])

  useEffect(()=>{
    if(currentuser.isSuccessful){
      setUSerBal(currentuser.data.balance)
    }
  },[currentuser])
  return (
      <div
        className="col-lg-10 mx-lg-auto"
        style={{
          height: 80,
          marginTop: 88,
          borderBottom: "3px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ height: "100%" }}
        >
          <h3 className="px-3" style={{ fontSize: 30, color: "#000" }}>
            {props.title}
          </h3>
          <div className="mx-xl-5 d-flex flex-row justify-content-between">
            <Button
              className="mx-3 px-4 py-2"
              title={`wallet: #${userBal}`}
              bg="rgba(0,0,0,0.03)"
              brColor="rgba(0,0,0,1)"
            />
            <Button
              className="mx-3 px-4 py-2"
              title="wallet: #0"
              bg="rgba(0,0,0,0.03)"
              brColor="rgba(0,0,0,1)"
            />
          </div>
        </div>
      </div>
  );
}

export default DashboardHeader;
