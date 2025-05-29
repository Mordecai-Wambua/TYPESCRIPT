import type { ReactNode } from "react";

type user2Props = {
  children: ReactNode;
};

export default function User2({ children }: user2Props) {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
}
