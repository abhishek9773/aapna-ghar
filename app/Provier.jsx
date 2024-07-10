import React from "react";
import Header from "./_components/Header";

const Provier = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Provier;
