import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "small" | "large";
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variantStyles = {
    default: "text-base font-normal",
    small: "text-sm font-normal",
    large: "text-lg font-normal",
  };

  return (
    <p className={`${variantStyles[variant]} ${className} my-4`}>{children}</p>
  );
};

export default Paragraph;
