import React from "react";
import Navbar from "../lib/nav/Navbar";
import NavBrand from "../lib/nav/NavBrand";
import NavLink from "../lib/nav/NavLink";

export default function MainNavbar() {
  return (
    <Navbar>
      <NavBrand href="/">Samantha Moyer | UX Writer</NavBrand>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Navbar>
  );
}
