import Button from "./components/Button";
import User from "./components/User";
import User2 from "./components/User2";

import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import type { Info, AdminInfoList } from "./types";

import Counter from "./components/Counter";

export default function App() {
  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <User name="Alex" age={20} isStudent={true} />
      <User2>
        <p>Hello</p>
      </User2>

      <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disabled={false}
      />

      <UserInfo user={user} />
      <AdminInfo admin={admin} />

      <Counter />
    </div>
  );
}
