import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href,
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-600",
    secondary: "bg-brand-teal text-white hover:bg-teal-700",
    outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      {children}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;