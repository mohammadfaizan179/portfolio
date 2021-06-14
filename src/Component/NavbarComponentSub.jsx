import React from 'react'
import { Link, animateScroll as scroll} from "react-scroll"
import {Nav} from "react-bootstrap";

const NavbarComponentSub = ({title, to, offset}) => {
    return (
        <>
            <Nav.Link>
                <Link
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={100}
                >
                    {title}
                </Link>
            </Nav.Link>
            
        </>
    )
}

export default NavbarComponentSub
