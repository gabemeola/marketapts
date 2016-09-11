import React, { PropTypes } from "react";
import { StyleSheet, css } from 'aphrodite';
import * as colorConstants from 'sharedStyles/colorConstants';
import studioImg from 'assets/studio.jpg';
import oneBedroomImg from 'assets/oneBedroom.jpg';
import twoBedroomImg from 'assets/twoBedroom.jpg';
import threeBedroomImg from 'assets/threeBedroom.jpg';

function Floorplans({floorPlanOptions}) {
	const { studio, oneBed, twoBed, threeBed } = floorPlanOptions;
	return (
		<div className={css(styles.container)}>
			<div className={css(styles.grid)}>
				{Object.keys(floorPlanOptions).map((apt, index) => { // Iterate over each object in floorPlanOptions and render
					return (
						<div key={index} className={css(styles.gridItem) + ' ' + css(styles[apt])}>
							<div className={css(styles.gridHeader)}>
								{floorPlanOptions[apt].name}
							</div>
						</div>
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
		height: 'calc(90vh - 100px)',
		padding: '5vh 0',
		backgroundColor: '#fff'
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		height: '100%'
	},
	gridItem: {
		position: 'relative',
		width: '50%',
		height: '50%',
		backgroundColor: 'inherit',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		boxSizing: 'border-box',
		overflow: 'hidden',
		color: 'cadetblue',
		':hover > div': { // Select direct descendant
			transform: 'translate3d(0, -80%, 0)',
		}
	},
	gridHeader: {
		position: 'absolute',
		backgroundColor: 'rgba(255, 140, 0, 0.8)',
		height: '100%',
		width: '100%',
		top: '80%',
		transition: 'all .2s ease-in-out'
	},
	studio: {
		backgroundImage: `url(${studioImg})`
	},
	oneBed: {
		backgroundImage: `url(${oneBedroomImg})`
	},
	twoBed: {
		backgroundImage: `url(${twoBedroomImg})`
	},
	threeBed: {
		backgroundImage: `url(${threeBedroomImg})`
	}
});

export default Floorplans;