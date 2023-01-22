import React from "react";
import UserService from "../services/UserServices";

type RenderOnRoleProps = {
  roles: string[];
  children: any;
};

const RenderOnRole: React.FC<RenderOnRoleProps> = ({ roles, children }) => {
  if (!UserService.hasRole(roles)) return null;
  return children;
};

export default RenderOnRole;

// @param example

//  <RenderOnRole roles={["admin"]}>
//    protected route with component render on role{" "}
//  </RenderOnRole>;
