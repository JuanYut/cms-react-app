import { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";

type Props = {
  variant?: variant;
  children: ReactNode;
  type?: buttonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({
  variant = "primary",
  children,
  onClick,
  type = "button",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;
