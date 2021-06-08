import React from 'react'
import { Link, animateScroll as scrol} from "react-scroll"
import {Nav} from "react-bootstrap";

const NavbarComponentSub = ({title, to}) => {
    return (
        <>
            <Nav.Link>
                <Link
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={100}
                >
                    {title}
                </Link>
            </Nav.Link>
            
        </>
    )
}

export default NavbarComponentSub
