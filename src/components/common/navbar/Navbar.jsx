import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        <section className='nav'>
            <a href='/' className='navbar-item'>About</a>

            <a href='/'className='navbar-item'>Propozycje</a>
            <a href='/'className='navbar-item'>Co nowego?</a>
            <a href='/'className='navbar-item'>Galeria</a>
            <a href='/'className='navbar-item'>Itinera</a>
        </section>
)
}

export default Navbar;