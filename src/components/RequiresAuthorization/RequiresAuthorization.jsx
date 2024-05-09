import React from "react";
import { userAuth } from "../../context/userauth";
import { Navigate, useLocation } from "react-router-dom";
const RequiresAuthorization = ({ children }) => {
  const {
    userData: { token: isLoggedin },
  } = userAuth();
  const location = useLocation();
  return (
    <>
      {isLoggedin ? (
        children
      ) : (
        <Navigate to={"/login"} state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequiresAuthorization;
