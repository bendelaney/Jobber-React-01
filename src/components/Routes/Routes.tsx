import appLogo from "assets/images/app-logo-placeholder.svg";
import AppFrame from "components/AppFrame";
import { useUserContext } from "../../contexts";
import Auth from "pages/Auth";
import Home from "pages/Home/Home";
import Dashboard from "pages/Dashboard/Dashboard";

import {
  Navigate,
  Outlet,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<AppFrame logo={appLogo} />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="auth" element={<Auth />} />
    </ReactRouterRoutes>
  );
};

const ProtectedRoutes = () => {
  const { user } = useUserContext();

  if (!user.accountName) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

export default Routes;
