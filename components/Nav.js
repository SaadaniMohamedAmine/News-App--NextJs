import Link from "next/link";
import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar expand="md" bg="dark">
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            <img src="/logo-3.jpg" className="h-10" alt="..." />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="collapsed-nav" className="bg-light" />
        <Navbar.Collapse id="collapsed-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-white">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/news/1">
                <a className="nav-link text-white">News</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/info">
                <a className="nav-link text-white">Info</a>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
