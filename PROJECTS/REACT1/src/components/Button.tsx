import type { FC } from "react";

type buttonProps = {
  label: string;
  onClick: () => void;
  disabled: boolean;
};

const Button: FC<buttonProps> = ({ label, onClick, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
