import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Button as MaterialButton } from "@mui/material";

const Button = ({ icon, fontColor, onClick, isVisible, bgColor }) => {
  return (
    <MaterialButton
      onClick={onClick}
      sx={{
        visibility: isVisible ? "visible" : "hidden",
        background: bgColor,
        padding: "16px",
        marginX: "5px",
        fontSize: "1.2rem",
        ":hover": {
          background: bgColor ? `${bgColor}CC` : "gray", 
        },
      }}
    >
      <FontAwesomeIcon style={{ color: fontColor }} icon={icon} />
    </MaterialButton>
  );
};
// prop validatiion
Button.propTypes = {
  isVisible: PropTypes.bool,
  icon: PropTypes.object,
  fontColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
};

export default Button;
