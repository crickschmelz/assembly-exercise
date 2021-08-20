import React from "react";
import { Topbar, Form, Search, Logo } from "../styles/NavbarStyles";
import logo from "../images/logo.svg"
import search from "../images/search.svg"
import reddit from "../images/reddit.svg"
import reddit2 from "../images/reddit-2.svg"

const Navbar = ({ filterImages, input }) => {
  return (
    <Topbar>
      <Logo>
        <img src={reddit} alt="Reddit logo" />
        <img src={reddit2} alt="Reddit logo" />
        <p>IMAGES</p>
      </Logo>
      <Form>
      <Search
        placeholder="Filter images by title..."
        type="text"
        value={input}
        onChange={(e) => filterImages(e)}
      />
      <img src={search} alt="Search icon"/>
      </Form>
    </Topbar>
  )
}

export default Navbar;
