import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class HomeContainer extends Component {
	render() {
		return(
			<div className={css(styles.coolThing)}>THIS IS A TEST</div>
		)
	}
}

const styles = StyleSheet.create({
	coolThing: {
		color: 'red',
		width: '500px',
		backgroundColor: 'blue',
		height: '100px'
	}
});

export default HomeContainer;