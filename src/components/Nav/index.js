import React, {useState, useEffect} from 'react';
import './style.css'
import { slide as Menu } from 'react-burger-menu'


const Nav = () => {

	const [size, setSize] = useState(window.innerWidth);

	  //size function
	  const handleResize=()=>{
		//set initial size
	  setSize(window.innerWidth)
	  }
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	console.log(size)
    return (
    <div>
		<div id='navLinks'>
		<a className='nav_About' href="#About"><h4>About</h4></a>
		<a className='nav_Resume' href="#Resume"><h4>Resume</h4></a>
		<a className='nav_Portfolio' href="#Portfolio"><h4>Portfolio</h4></a>
		<a className='nav_Contact' href="#Contact"><h4>Contact</h4></a>
		</div>
		{/*		<Menu>
		<div id='navLinks'>
		<a className='nav_About' href="#About"><h4>About</h4></a>
		<a className='nav_Resume' href="#Resume"><h4>Resume</h4></a>
		<a className='nav_Portfolio' href="#Portfolio"><h4>Portfolio</h4></a>
		<a className='nav_Contact' href="#Contact"><h4>Contact</h4></a>
		</div>
		</Menu> */}
	</div>

    )
}
export default Nav