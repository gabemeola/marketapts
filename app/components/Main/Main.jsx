import React from "react";
import { StyleSheet, css } from 'aphrodite';
import Nav from './Nav';
import jumbotronApt from 'assets/jumbotronApt.jpg';

function Main(props) {
	return (
		<div className={css(styles.componentWrapper)}>
			<div className={css(styles.jumbotron)}/>
			<div className={css(styles.contentWrapper)}>
				<Nav/>
				{props.children}
			</div>
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
		zIndex: '2',
		backgroundColor: '#fff'
	}
});

export default Main;