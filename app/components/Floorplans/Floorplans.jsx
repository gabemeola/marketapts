import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Floorplans(props) {
	return (
		<div className={css(styles.test)}>FloorPlans</div>
	)
}

const styles = StyleSheet.create({
	test: {
		height: '100vw',
		backgroundColor: 'green'
	}
});

export default Floorplans;