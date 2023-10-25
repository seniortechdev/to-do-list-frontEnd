import React, { useState } from 'react';
import '../../styles/navBar.css';
import Hamburger from 'hamburger-react';

const NavBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="nav-container" role="presentation">
        <section onClick={() => setOpen(false)}>
            LOGO
        </section>
        <Hamburger
          toggled={open}
        />
        {open ? (
            <ul className="hamburger-ul">
                <li>Home</li>
                <li>About</li>
            </ul>
        ) : null}
    </div>
  )
}

export default NavBar