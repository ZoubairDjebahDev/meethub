import React, { ReactNode } from "react";

interface rootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: rootLayoutProps) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default RootLayout;
