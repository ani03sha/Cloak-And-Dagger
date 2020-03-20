import React, { useEffect, useState, useRef, Fragment } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Welcome from './components/Header/Welcome';

function App() {
	useEffect(() => {
		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		}
	}, []);

	const [isSticky, setSticky] = useState(false);
	const stickyRef = useRef(null);
	const handleScroll = () => {
		window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom ? setSticky(true) : setSticky(false);
	}

	const debounce = (func, wait = 20, immediate = true) => {
		let timeout;
		return () => {
			let context = this, args = arguments;
			const later = () => {
				timeout = null;
				if(!immediate) {
					func.apply(context, args);
				}
			}
			const callNow = immediate && !timeout;
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
			if(callNow) {
				func.apply(context, args);
			}
		}
	}

	window.addEventListener("scroll", debounce(handleScroll));

	return(
		<Fragment>
			<Navbar sticky={isSticky} />
			<Welcome stickyRef={stickyRef} />
		</Fragment>
	);
}

export default App;