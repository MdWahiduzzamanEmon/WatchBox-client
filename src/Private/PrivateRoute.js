import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
      return <CircularProgress color="success" sx={{my:40}} />;
    }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.uid ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;