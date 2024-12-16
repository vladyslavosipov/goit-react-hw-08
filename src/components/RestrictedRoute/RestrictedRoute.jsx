import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"; 
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./RestrictedRoute.module.css";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <div className={css.restrictedRoute}>
      <p className={css.redirectMessage}>You are already logged in</p>
      <Navigate to="/contacts" />
    </div>
  ) : (
    children
  );
};


RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RestrictedRoute;
