import Input from "../../components/input/input"
import { useEffect, useState } from "react";
import "./register.css";
import Button from "../../components/customButton/button";
import LOGO from "../../assets/images/fidpressLogo.png";
import colors from "../../assets/theme/colors";
import BANNERIMG from "../../assets/images/woman.png";
import { signup, signupCleanup } from "../../store/actions/signup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN } from "../../constants/routeNames";
function RegisterComponent() {
  // const [data, setData] = useState(); //to keep input data as an array
  const [form, setForm] = useState({}); //to keep input data as an array
  const [errors, setErrors] = useState({}); //takes in all form errors and display
  const [HidePassword, ShowPassword] = useState(true); //toggle pasword type state
  const RegisterState = useSelector((e)=>e.signup);
  const dispatch = useDispatch();
  const [data, setData] = useState({}); //toggle pasword type state
  const [loading, setLoadng] = useState(false); //toggle pasword type state
  useEffect(()=>{
    if (RegisterState.isSuccessful){
       setData(RegisterState.data)
       setLoadng(false)
       setTimeout(()=>{
         setData("");
         window.location.href = "/login";
       }, 2000)
       dispatch(signupCleanup)
    }else{
      console.log("reg", RegisterState)
    }
  },[RegisterState, dispatch])
  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== "") {
      setErrors((prev) => {
        return {
          ...prev,
          [name]: null,
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          [name]: "this field is required",
        };
      });
    }
  };

  /**
   * Listens to the onSubmit event on Input @see components/input/input
   * @returns true or false and calls the Api endpoint if no error
   */
  const onSubmit = () => {
    if (!form.emailAddress) {
      //checks if email is not empty
      setErrors((prev) => {
        return {
          ...prev,
          emailAddress: "Email can not be empty", //error message
        };
      });
    } else {
      //   if (validator.isEmail(form.emailAddress)) {
      //     //checks if the emailAddress is valid
      //     setErrors((prev) => {
      //       return {
      //         ...prev,
      //         emailAddress: null,
      //       };
      //     });
      //   } else {
      //     setErrors((prev) => {
      //       return {
      //         ...prev,
      //         emailAddress: "Enter a vailid email address", // error message
      //       };
      //     });
      //   }
    }
    if (!form.password) {
      //checks if password is not empty
      setErrors((prev) => {
        return {
          ...prev,
          password: "password can not be empty", //if empty, display error
        };
      });
    }
    if (
      Object.values(errors).every((item) => !item) &&
      Object.values(form).length === 3
    ) {
      setLoadng(true)
      dispatch(signup(form))
    }
  };
  return (
    <div className="bigWrapper">
      <div className="col-12 d-flex flex-row justify-content-between align-items-center">
        <div className="col-12 col-lg-5">
          <div className="col-10 col-lg-8 m-auto">
            <div className="login-logo">
              <img src={LOGO} alt="fidpress" />
            </div>
            {data.error && (
              <div
                style={{
                  backgroundColor: colors.danger,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  borderRadius: 4,
                  marginBottom: 25,
                  color: "#fff",
                }}
              >
                {data.error && data.error}
              </div>
            )}
             {data.message && (
              <div
                style={{
                  backgroundColor: colors.success,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  borderRadius: 4,
                  marginBottom: 25,
                  color: "#fff",
                }}
              >
                {data.message && data.message}
              </div>
            )}
            <div></div>
            <Input
              height={35}
              ml={10}
              br={2}
              width="100%"
              error={errors.username}
              onChangeText={(e) => {
                onChange({ name: "username", value: e.target.value }); //onchange events
              }}
              type="text"
              title="Enter Username"
              pr={10}
              pl={10}
            />
            <Input
              height={35}
              ml={10}
              br={2}
              width="100%"
              error={errors.email}
              onChangeText={(e) => {
                onChange({ name: "email", value: e.target.value }); //onchange events
              }}
              type="email"
              title="Enter Email Address"
              pr={10}
              pl={10}
            />
            
            <Input
              height={35}
              ml={10}
              br={2}
              width="100%"
              error={errors.password}
              onChangeText={(e) => {
                onChange({ name: "password", value: e.target.value }); //onchange events
              }}
              type="password"
              title="Enter Password"
              pr={10}
              pl={10}
            />
            <span>No Account Yet?? <Link to={LOGIN}>Login</Link></span>
            <div>
              <Button
                height={40}
                br={5}
                brColor="rgb(233, 94, 233)"
                bg="rgb(233, 94, 233)"
                color="#fff"
                onclick={onSubmit}
                loading={loading}
                title={"Register"}
                mt={25}
              />
            </div>
          </div>
        </div>
        <div className="loginBg col-7 vh-100 d-none d-lg-flex flex-column justify-content-between">
          <div className="bannerText d-flex flex-column justify-content-center">
            <h4>REGISTER YOUR ACCOUNT</h4>
            <ul>
              <li>Login to fidpress network</li>
              <li>Login to fidpress network</li>
              <li>Login to fidpress network</li>
            </ul>
          </div>
          <div className="bannerImg">
            <img className="col-12" src={BANNERIMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
