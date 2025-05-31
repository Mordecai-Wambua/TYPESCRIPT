import type { FC } from "react";
import type { AdminInfoList } from "../types";

type AdminInfoProp = {
  admin: AdminInfoList;
};

const AdminInfo: FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>ID: {admin.id}</p>
      <p>NAME: {admin.name}</p>
      <p>EMAIL: {admin.email}</p>
      <p>ROLE: {admin.role}</p>
      <p>LastLogin: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
