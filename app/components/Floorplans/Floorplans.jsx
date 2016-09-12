import React, { PropTypes } from "react";
import { Link } from 'react-router';
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
						<div key={index} className={css(styles.gridItem) + ' ' + css(styles[apt])} onTouchStart={() => {}}> {/*onTouchStart set to an empty function allow mobile active states to work*/}
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
									<Link to={`/floorplans/${apt}`} className={css(styles.moreDetailBtn)}>
										View Floorplans
									</Link>
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
		height: 'calc(95vh - 100px)',
		paddingTop: '5vh',
		backgroundColor: '#fff'
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		height: '100%',
	},
	gridItem: {
		position: 'relative',
		width: '50%',
		height: '304px',
		backgroundColor: '#fff',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundPosition: 'top center',
		boxSizing: 'border-box',
		overflow: 'hidden',
		color: colorConstants.black(),
		':hover > div': { // Select direct descendant
			transform: 'translate3d(0, -80.1%, 0)',
			backgroundColor: colorConstants.red(0.9),
		},
		':active > div': { // Works for touch on mobile
			transform: 'translate3d(0, -80.1%, 0)',
			backgroundColor: colorConstants.red(0.9),
		},
		'@media only screen and (max-width: 580px)': {
			width: '100%'
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
		paddingBottom: '3%',
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
	},
	moreDetailBtn: {
		position: 'relative',
		display: 'block',
		border: '2px solid #fff',
		width: '150px',
		height: '50px',
		margin: '0 auto',
		textAlign: 'center',
		lineHeight: '50px',
		color: '#fff',
		cursor: 'pointer',
		transition: 'all .2s ease-in-out',
		':hover': {
			border: `2px solid ${colorConstants.blue()}`,
			color: colorConstants.blue()
		},
		':active': {
			border: `2px solid ${colorConstants.blue()}`,
			color: colorConstants.blue()
		}
	},
});

export default Floorplans;