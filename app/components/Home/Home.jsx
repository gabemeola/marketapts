import React from "react";
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';
import jumbotronApt from '../../../assets/jumbotronApt.jpg';

function Home(props) {
	return (
		<div className={css(styles.componentWrapper)}>
			<div className={css(styles.jumbotron)}/>
			<header className={css(styles.contentWrapper)}>
				<div className={css(styles.navWrapper)}>
					<nav className={css(styles.navText)}>
						<h1 className={css(styles.navHeader)}>Humansvile Apts</h1>
						<ul className={css(styles.navItems)}>
							<Link to='/floorplans' className={css(styles.navItem)}>Floorplans</Link>
							<Link to='/amenities' className={css(styles.navItem)}>Amenities</Link>
							<Link to='/neighborhood' className={css(styles.navItem)}>Neighborhood</Link>
							<Link to='/gallery' className={css(styles.navItem)}>Gallery</Link>
							<Link to='/contact' className={css(styles.navItem)}>Contact</Link>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	)
}

const styles = StyleSheet.create({
	componentWrapper: {

	},
	jumbotron: {
		backgroundImage: `url(${jumbotronApt})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '100vw',
		height: '95vh',
		boxSizing: 'border-box',
		position: 'fixed',
		top: '0',
		zIndex: '1'
	},
	contentWrapper: {
		position: 'relative',
		top: 'calc(100vh - 100px)',
		zIndex: '2'
	},
	navWrapper: {
		widths: '100vw',
		height: '100px',
		boxSizing: 'border-box',
		backgroundColor: 'orange',
	},
	navText: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '80%',
		margin: '0 auto',
		backgroundColor: 'brown',
		position: 'relative',
		top: '50%',
		transform: 'translateY(-50%)',
	},
	navHeader: {
		color: 'darkgray',
		display: 'inline-block',
	},
	navItems: {
		display: 'inline-block',
	},
	navItem: {
		display: 'inline-block',
		marginRight: '15px',
		':last-child': {
			marginRight: '0'
		},
		':hover': {
			cursor: 'pointer'
		}
	}
});

export default Home;