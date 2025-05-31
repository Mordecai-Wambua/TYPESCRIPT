import type { FC } from "react";
import type { Info } from "../types";

type UserInfoProp = {
  user: Info;
};

const UserInfo: FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {user.id}</p>
      <p>NAME: {user.name}</p>
      <p>EMAIL: {user.email}</p>
    </div>
  );
};

export default UserInfo;
