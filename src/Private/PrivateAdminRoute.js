import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateAdminRoute = ({ children, ...rest }) => {
  const { user, isLoading,isAdmin } = useAuth();
  if (isLoading) {
    return <CircularProgress color="success" sx={{ my: 40 }} />;
  }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user?.email && isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateAdminRoute;
