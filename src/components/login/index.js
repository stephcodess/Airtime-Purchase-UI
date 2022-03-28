import Input from "../input/input";
import { useEffect, useState } from "react";
import "./index.css";
import Button from "../../components/customButton/button";
import LOGO from "../../assets/images/fidpressLogo.png";
import colors from "../../assets/theme/colors";
import BANNERIMG from "../../assets/images/woman.png";
import { useDispatch, useSelector } from "react-redux";
import { login, loginCleanup } from "../../store/actions/login";
/**
 * The login Input component
 * @class LoginComponent
 * @param Input @see components/input/input
 * @returns Login screen
 */
function LoginComponent() {
  // const [data, setData] = useState(); //to keep input data as an array
  const [form, setForm] = useState({}); //to keep input data as an array
  const [data, setData] = useState({});
  const [loading, setLoadng] = useState(false);
  const [errors, setErrors] = useState({}); //takes in all form errors and display
  const [HidePassword, ShowPassword] = useState(true); //toggle pasword type state
  const dispatch = useDispatch();
  const loginState = useSelector((e)=>e.login);
  useEffect(() => {
    if (loginState.isSuccessful) {
      setData(loginState.data)
      setLoadng(false)
      setTimeout(()=>{
        setData("");
        window.location.href="/dashboard"
      }, 2000);
      dispatch(loginCleanup);
    }
  }, [dispatch, loginState])
  
  /**
   * Listens to the onchange event on Input @see components/input/input
   * @param name The name given to the input
   * @param value Input Value
   * @returns data in an array and store it in data state variable
   */
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
    if (!form.username) {
      //checks if email is not empty
      setErrors((prev) => {
        return {
          ...prev,
          username: "Username can not be empty", //error message
        };
      });
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
      Object.values(form).length === 2
    ) {
      setLoadng(true);
      dispatch(login(form))
    }
  };

  return (
    <div className="bigWrapper">
      <div className="col-12 d-flex flex-row justify-content-between align-items-center">
        <div className="col-5">
          <div className="col-8 m-auto">
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
            <div></div>
            <Input
              height={60}
              ml={10}
              placeholder="Enter Your Username"
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
            <br />
            <Input
              height={60}
              placeholder="Enter Your Password"
              ml={10}
              br={2}
              width="100%"
              error={errors.password}
              onChangeText={(e) => {
                onChange({ name: "password", value: e.target.value }); //onchange events
              }}
              forgotpassword
              type="password"
              title="Enter Password"
              pr={10}
              pl={10}
            />
            <span>No Account Yet?? Register</span>{" "}
            <div>
              <Button
                height={50}
                br={5}
                brColor="rgb(233, 94, 233)"
                bg="rgb(233, 94, 233)"
                color="#fff"
                onclick={onSubmit}
                loading={loading}
                title={"Login"}
                mt={25}
              />
            </div>
            <span
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "15px",
                fontWeight: "bolder",
              }}
            >
              {" "}
              OR
            </span>
          </div>
        </div>
        <div className="loginBg col-7 vh-100 d-flex flex-column justify-content-between">
          <div className="bannerText d-flex flex-column justify-content-center">
            <h4>LOGIN TO FIDPRESS</h4>
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

export default LoginComponent;
