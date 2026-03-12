import logoImage from "figma:asset/a6f212c55987d574b6e49bd28addcd3583161612.png";

interface EstLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function EstLogo({ size = "md", className = "" }: EstLogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  return (
    <img
      src={logoImage}
      alt="EST Sidi Bennour Logo"
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
}
