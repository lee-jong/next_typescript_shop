import React from "react";
import Link from "next/link";

import "../../styles/nav.css";


class NavBar extends React.Component {
  state = {
    scrollTop : 0
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let scrollTop = e.srcElement.scrollingElement.scrollTop
    this.setState({ scrollTop })
  }

  render(){
    let { scrollTop } = this.state
    return (
      <>
      {/* "navBar" */}
        <ul className = {"navBar " + (scrollTop >= 100 && 'navBarFixed')} >
          메뉴가 들어갈거에요!
        </ul>
      </>
    );
  }
}

export default NavBar;
