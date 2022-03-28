/**
 * Custom buttom coponent.
 * @class
 * takes in props.
 * @property height the height of the button
 * @property width the width of the button
 * @param props
 * @returns {Buuton} with stated styling
 */
import PropTypes from "prop-types";
import colors from "../../assets/theme/colors";
import GOOGLE from "../../assets/images/google.png";
import "./index.css";
const Button = (props) => {
  /**
   * function to display background color of the button
   * @function getBgColor
   * @returns background color
   */
  const getBgColor = () => {
    if (props.disabled) {
      return colors.grey;
    }
    if (props.primary) {
      return colors.primary;
    }
    if (props.danger) {
      return colors.danger;
    }
    if (props.secondary) {
      return colors.secondary;
    }
    if (props.main) {
      return colors.main;
    }
    if (props.twitter) {
      return colors.twitter;
    }
    if (props.facebook) {
      return colors.facebook;
    }
    if (props.bg) {
      return props.bg;
    }
  };
  const styles = {
    customButton: {
      backgroundColor: getBgColor(),
      height: props.height,
      borderRadius: props.br,
      width: props.width,
      margin: props.margin,
      marginTop: props.mt,
      marginBottom: props.mb,
      paddingLeft: props.paddingLeft,
      paddingRight: props.paddingRight,
      border: props.br ? "1px solid " + colors.grey : "none",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      cursor: "pointer",
      fontSize: props.fontSize,
      borderColor: props.brColor,
    },
  };
  return (
    <button
      disabled={props.disabled}
      style={styles.customButton}
      className={props.className}
      onClick={props.onclick}
      {...props}
    >
      <div style={styles.container}>
        <span
          className="btn-title"
          style={{
            color: props.color,
            marginRight: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.loading ? (
            <div class="spinner-border" role="status"></div>
          ) : (
            props.title
          )}
        </span>
      </div>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  height: PropTypes.node,
  width: PropTypes.node,
  margin: PropTypes.node,
  mt: PropTypes.node,
  mb: PropTypes.node,
  brColor: PropTypes.string,
  br: PropTypes.node,
  bg: PropTypes.node,
};
export default Button; //makes component available to other components
