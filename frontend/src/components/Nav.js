
import React from 'react'

import { Link } from 'react-router-dom'

//if we will use <link>, then the page will nto get refresh
const Nav = () => {

    return (
        <div>

            <ul className="nav-ul">

                <li><Link to="/">React Test</Link></li>
                <li><Link to="/index">Option1 (server)</Link></li>
                <li><Link to="/api">Option2 (server)</Link></li>

            </ul>


        </div>
    )
}

export default Nav