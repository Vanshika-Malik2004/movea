import React from "react";
import { Outlet } from "react-router-dom";

const RouterStruct = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RouterStruct;
