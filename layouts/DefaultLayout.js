import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default DefaultLayout;
