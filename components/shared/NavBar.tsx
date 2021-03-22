import React from "react";
import Link from "next/link";

import "../../styles/nav.css";

import UserInfo from './UserInfo'


interface Props {
  nowPage : string
}

class NavBar extends React.Component<Props> {
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
    let { nowPage } = this.props
    return (
      <>
        <div className = {"navBar " + (scrollTop >= 100 && 'navBarFixed')} >
          {scrollTop >= 100 ? 
            <UserInfo />
            :
            nowPage == '/' && 
            <img className ="imageCard"
                src = '../../static/images/Logo.png'
            /> 
          }
          <ul>
            <li>
                <a>Home</a>
                <ul>
                  <li>zio</li>
                  <li>zio</li>
                  <li>zio</li>
                  <li>zio</li>
                  <li>zio</li>
                </ul>
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
