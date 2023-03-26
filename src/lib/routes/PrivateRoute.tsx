import { Navigate, useLocation } from "react-router-dom";
import { store } from "../../store/store";
import { ReactNode } from 'react';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({children}: PrivateRouteProps) => {
  const token = store.getState().auth.token
  const location = useLocation();

  if (!token) {
    if(location.pathname){
      const url = `/login?${location.pathname}`;
      return <Navigate to={url} replace />;
    }
  }

  return <>{children}</>;
};

export default PrivateRoute;