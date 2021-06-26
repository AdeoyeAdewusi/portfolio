import React from 'react';
import './style.css'


const Nav = () => {
    return (
    <div>
		<div id='navLinks'>
		<a className='nav_About' href="#About"><h4>About</h4></a>
		<a className='nav_Resume' href="#Resume"><h4>Resume</h4></a>
		<a className='nav_Portfolio' href="#Portfolio"><h4>Portfolio</h4></a>
		<a className='nav_Contact' href="#Contact"><h4>Contact</h4></a>
		</div>
	</div>
    )
}

export default Nav
