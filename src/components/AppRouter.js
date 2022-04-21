import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import Auth from "../pages/Auth";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Router>
      <Routes>
        <Route path="/auth">
          <Auth />
        </Route>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
