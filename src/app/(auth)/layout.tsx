import React from "react";

interface AuthProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthProps> = ({
  children
}) => {
  return (
    <div className="h-screen bg-slate-200 flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
