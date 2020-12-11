import React from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import Typical from "react-typical";
import { useState } from "react";
function Navabar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const closeMobileButton = () => setClick(false);
	const handleClick = () => setClick(!click);
	const showButton = () => {
		if (window.innerWidth >= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
    };
    window.addEventListener("resize", showButton);
	return (
		<div className="navbar">
            <div className="navbar__Items">
                <div className="menu__icon" onClick={handleClick}>
					{click ? <ClearIcon /> : <MenuIcon />}
				</div>
                <ul className={click ? "navbar__menuItems active":"navbar__menuItems"}>
					<li className="nav__item">
						<a className="nav__links" href="/">Home</a>
					</li>
					<li className="nav__item">
						<a className="nav__links" href="/">About</a>
					</li>
					<li className="nav__item">
						<a className="nav__links" href="/">Services</a>
					</li>
					<li className="nav__item">
						<a className="nav__links" href="/">Work</a>
					</li>
					<li className="nav__item">
						<a className="nav__links" href="/">Contact</a>
					</li>
                </ul>
			</div>
			<div className="navbar__intro">
				<span>CHRISTOPHER WANJOHI</span>
				<p>
					Hi ,
					<Typical
						loop={Infinity}
						wrapper="b"
						steps={[
							"A Junior datascientist",
							1000,
							"and a freelancer",
							500,
						]}
					/>
				</p>
			</div>
		</div>
	);
}

export default Navabar;
