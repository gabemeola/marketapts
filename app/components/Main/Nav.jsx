import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import * as colorConstants from 'sharedStyles/colorConstants';
import Stickyfill from "../../../external_modules/stickyfill";

class Nav extends Component {
	componentDidMount() {
		const nav = document.getElementById('nav');
		Stickyfill.add(nav);
	}
	render() {
		return (
			<header className={css(styles.navWrapper)} id="nav">
				<nav className={css(styles.navText)}>
					<h1 className={css(styles.navHeader)}>Humansville Apts</h1>
					<ul className={css(styles.navItems)} onTouchStart={() => {}}>
						<Link to='/floorplans' className={css(styles.navItem)}>Floorplans</Link>
						<Link to='/amenities' className={css(styles.navItem)}>Amenities</Link>
						<Link to='/neighborhood' className={css(styles.navItem)}>Neighborhood</Link>
						<Link to='/gallery' className={css(styles.navItem)}>Gallery</Link>
						<Link to='/contact' className={css(styles.navItem)}>Contact</Link>
					</ul>
				</nav>
			</header>
		)
	}
}

const styles = StyleSheet.create({
	navWrapper: {
		width: '100vw',
		height: '100px',
		boxSizing: 'border-box',
		backgroundColor: colorConstants.orange(),
		position: 'relative',
		position: 'sticky',
		position: '-webkit-sticky',
		top: '0',
		zIndex: '999'
	},
	navText: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '85%',
		margin: '0 auto',
		position: 'relative',
		top: '50%',
		transform: 'translateY(-50%)',
		'@media only screen and (max-width: 580px)': {
			width: '100%'
		}
	},
	navHeader: {
		color: colorConstants.purple(),
		fontWeight: '500',
		display: 'inline-block',
	},
	navItems: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		fontWeight: '700',
		marginTop: '5px',
		'@media only screen and (max-width: 580px)': {
			fontSize: '20px'
		}
	},
	navItem: {
		display: 'inline-block',
		marginRight: '7.5px',
		marginLeft: '7.5x',
		transition: 'all .1s ease-in-out',
		color: colorConstants.black(),
		':first-child': {
			marginLeft: '0'
		},
		':last-child': {
			marginRight: '0'
		},
		':hover': {
			cursor: 'pointer',
			color: colorConstants.red()
		},
		':active': {
			color: colorConstants.red()
		}
	}
});

export default Nav