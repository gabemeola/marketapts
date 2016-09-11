import React, { PropTypes } from "react";
import { StyleSheet, css } from 'aphrodite';

function Floorplans({floorPlanOptions}) {
	const { studio, oneBed, twoBed, threeBed } = floorPlanOptions;
	return (
		<div className={css(styles.container)}>
			<div className={css(styles.grid)}>
				{Object.keys(floorPlanOptions).map((apt) => { // Iterate over each object in floorPlanOptions and render
					return (
						<div className={css(styles.gridItem)}>{floorPlanOptions[apt].name}</div>
					)
				})}
			</div>
		</div>
	)
}

Floorplans.propTypes = {
	floorPlanOptions: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		height: '100vw',
		backgroundColor: '#fff'
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		height: 'calc(100vh - 100px)'
	},
	gridItem: {
		width: '50%',
		height: '50%',
		backgroundColor: 'cadetblue'
	}
});

export default Floorplans;