import type { FC } from "react";

type userProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User: FC<userProps> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};

export default User;

// export default function User({ name, age, isStudent }: userProps) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>{age}</h2>
//       <h2>{isStudent}</h2>
//     </div>
//   );
// }
