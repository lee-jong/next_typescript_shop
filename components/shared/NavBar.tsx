import React from "react";
import Link from "next/link";

import "../../styles/nav.css";

const NavBar = () => {
  return (
    <>
      <ul className = "navBar">
        메뉴가 들어갈거에요!
        {/* <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/signin">
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default NavBar;
