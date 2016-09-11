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
								<div className={css(styles.gridTitle)}>
									{floorPlanOptions[apt].name}
								</div>
								<div className={css(styles.gridBottom)}>
									<div className={css(styles.gridBottomText)}>
										<div>{floorPlanOptions[apt].bed} bedroom</div>
										<div>{floorPlanOptions[apt].bath} bathroom</div>
										<div>${floorPlanOptions[apt].rentRangeStart} - ${floorPlanOptions[apt].rentRangeEnd} / month</div>
										<div>${floorPlanOptions[apt].deposit} Deposit</div>
										<div>{floorPlanOptions[apt].sqFeet} Sq. feet</div>
									</div>
								</div>
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
		backgroundPosition: 'top center',
		boxSizing: 'border-box',
		overflow: 'hidden',
		color: colorConstants.black(),
		':hover > div': { // Select direct descendant
			transform: 'translate3d(0, -80.1%, 0)',
			backgroundColor: colorConstants.red(0.9),
		}
	},
	gridHeader: {
		position: 'absolute',
		backgroundColor: colorConstants.red(0.97),
		height: '100%',
		width: '100%',
		top: '80%',
		transition: 'all .2s ease-in-out',
	},
	gridTitle: {
		position: 'relative',
		width: '50%',
		margin: '0 auto',
		textAlign: 'center',
		top: '6%'
	},
	gridBottom: {
		position: 'absolute',
		backgroundColor: colorConstants.maroon(0.6),
		height: '83%',
		width: '100%',
		bottom: '0',
	},
	gridBottomText: {
		position: 'relative',
		paddingTop: '2%',
		width: '80%',
		margin: '0 auto',
		textAlign: 'center',
		color: '#fff',
		lineHeight: '20px'
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