import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

function Nav(props) {
	return (
		<header className={css(styles.navWrapper)}>
			<nav className={css(styles.navText)}>
				<h1 className={css(styles.navHeader)}>Humansville Apts</h1>
				<ul className={css(styles.navItems)}>
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

const styles = StyleSheet.create({
	navWrapper: {
		widths: '100vw',
		height: '100px',
		boxSizing: 'border-box',
		backgroundColor: 'orange',
	},
	navText: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '85%',
		margin: '0 auto',
		//backgroundColor: 'brown',
		position: 'relative',
		top: '50%',
		transform: 'translateY(-50%)',
	},
	navHeader: {
		color: 'darkgray',
		display: 'inline-block',
	},
	navItems: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	navItem: {
		display: 'inline-block',
		marginRight: '7.5px',
		marginLeft: '7.5x',
		':first-child': {
			marginLeft: '0'
		},
		':last-child': {
			marginRight: '0'
		},
		':hover': {
			cursor: 'pointer'
		}
	}
});

export default Nav