import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h6
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed By{" "}
        <span className="text-primary">Saadanni Mohamed Amine</span>
      </h6>
    </footer>
  );
};

export default Footer;
