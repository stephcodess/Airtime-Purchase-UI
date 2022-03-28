
import propTypes from "prop-types";
import { useState } from "react";
import colors from "../../assets/theme/colors";
import { FORGOTPASSWORD } from "../../constants/routeNames";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * A custom input component
 * @function Input
 * @param props takes in props for styling
 * @returns Input elements
 */
function Input(props) {
  const [focused, setFocused] = useState(false);
  /**
   * Get the border color for each input state
   * @returns color
   */
  const getBorderColor = () => {
    if (props.error) {
      /**
       * @returns colors.danger
       */
      return colors.danger;
    }
    if (focused) {
      /**
       * @returns colors.primary
       */
      return colors.primary;
    } else {
      /**
       * @returns colors.grey
       */
      return colors.grey;
    }
  };
  /**
   * To get the flex display of input element
   * @returns Flex direction for input
   */
  const getFlexDirection = () => {
    if (props.icon && props.iconPosition) {
      if (props.iconPosition === "left") {
        return "row";
      } else {
        return "row-reverse";
      }
    }
    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  /**
   * A custom input component
   * @returns styling for the custom input element
   */
  const styling = {
    input: {
      height: "90%",
      width: "100%",
      margin: "auto",
      border: "none",
      fontSize: props.fontSize, //font size for input
      backgroundColor: props.bg, //the background
      flex: 1,
    },
    wrapper: {
      borderWidth: props.borderWidth?props.borderWidth:4,
      display: "flex",
      height: props.height,
      borderRadius: props.br,
      borderColor:props.borderColor,
      paddingLeft: props.pl,
      paddingRight: props.pr,
      marginTop: props.ml,
      flexDirection: getFlexDirection(),
      border: props.br ? "1px solid " + getBorderColor() : "",
      alignItems: "center",
      borderBottom: props.borderBottom,
      paddingHorizontal: 10,
    },
    inputWrapper: {
      paddingVertical: 21,
      marginBottom: props.mb,
      width: props.width,
      margin: props.margin,
    },
    error: {
      color: colors.danger,
      textAlign: "center",
      fontSize: 12,
    },
  };

  return (
    <div style={styling.inputWrapper} className={`inputWrapper ${props.className}`}>
      {/**
       * if there is props.title, display it
       * @param props.title
       * @returns props.title
       */}
      {props.title ? (
        <label
          style={{
            textAlign: "left",
            fontWeight: "bolder",
            color: "rgba(0,0,0,0.5)",
            fontSize: 12,
          }}
        >
          {props.title}
          {props.required ? <span style={{ fontSize: 20, color: "red" }}>*</span> : ""}
        </label>
      ) : (
        ""
      )}
      {/**
       * if props.forgotpassword is passed, display
       * @returns props.forgotPassword link
       */}
      {props.forgotpassword ? (
        <Link
          style={{
            float: "right",
            color: "#2556FA",
            fontWeight: "bolder",
            fontSize: 15,
          }}
          to={FORGOTPASSWORD}
        >
          Forgot password?
        </Link>
      ) : (
        ""
      )}
      <div style={styling.wrapper}>
        <span
          style={{
            cursor: "pointer",
            fontWeight: "bolder",
            fontSize: 13,
            paddingLeft: props.pL,
          }}
        >
            {/* displays icon stated if only type is not a checkbox */}
          {props.type !== "checkbox" ? (
            props.icon && <i className={`bi bi-${props.icon}`} onClick={props.doAction}
            color="#FCCA6B"></i>
          ) : (
            props.icon //the icon stated
          )}
        </span>
        <input
          style={styling.input}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChangeText}
          onFocus={() => {
            setFocused(true);
          }}
          onKeyUp={props.inputKeyUp}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </div>
      {props.paragraph ? (
        <p style={{ color: "rgba(0,0,0,0.3)", fontSize: 10 }}>
          {props.paragraph}
        </p>
      ) : (
        ""
      )}

      {
        //   display errors in form input
        props.error && <span style={styling.error}>{props.error}</span>
      }
    </div>
  );
}

Input.propTypes = {
  //states types for props
  title: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
};

export default Input; //makes the component available for other components
