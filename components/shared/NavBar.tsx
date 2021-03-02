import React from "react";
import Link from "next/link";

import "../../styles/nav.css";

import UserInfo from './UserInfo'


class NavBar extends React.Component {
  state = {
    scrollTop : 0
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = ( e: { srcElement: any | undefined; } ) => {
    let scrollTop = e.srcElement != undefined && e.srcElement.scrollingElement.scrollTop
    this.setState({ scrollTop })
  }

  render(){
    let { scrollTop } = this.state
    return (
      <>
        <div className = {"navBar " + (scrollTop >= 100 && 'navBarFixed')} >
          {scrollTop >= 100 ? 
            <UserInfo />
            :
            <img className ="imageCard"
                src = '../../static/images/Logo.png'
            /> 
          }
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
