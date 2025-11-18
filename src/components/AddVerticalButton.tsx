import React from "react";

type VerticalButtonProps = {
  label: string;
  href: string;
  // position?: "left"; 
};

const VerticalButton: React.FC<VerticalButtonProps> = ({
  label,
  href,
}) => {
  return (
    <a
      href={href}
      className={`fixed top-1/2 transform -translate-y-1/2 px-4 py-2 btn-squared z-50 `}
      style={{ writingMode: "vertical-rl", textAlign: "center", transform: "rotate(180deg)", }}
    >
      {label}
    </a>
  );
};

export default VerticalButton;
