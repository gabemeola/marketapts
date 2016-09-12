import React, { PropTypes } from "react";
import { StyleSheet, css } from 'aphrodite';
import * as colorConstants from 'sharedStyles/colorConstants'
import checkMarkImg from 'assets/checkMark.svg';

function Amenities({communityAmenities}) {
	return (
		<div className={css(styles.container)}>
			<div className={css(styles.wrapper)}>
				<h1 className={css(styles.header)}>Amenities</h1>
				<div className={css(styles.grid)}>
					{communityAmenities.map((amenity, index) => {
						return (
							<div key={index} className={css(styles.gridItem)}>
								<div className={css(styles.gridItemCheck)}>
									<img className={css(styles.gridItemCheckImg)} src={checkMarkImg} alt="Checkmark"/>
								</div>
								<p className={css(styles.gridItemText)}>{amenity}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

Amenities.propTypes = {
	communityAmenities: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingBottom: '15vh',
		paddingTop: '5vh',
		color: '#fff',
		backgroundColor: colorConstants.blue()
	},
	wrapper: {
		width: '80%',
		margin: '0 auto'
	},
	header: {
		width: '100%',
		fontWeight: '300',
		marginBottom: '30px',
		borderBottom: `3px solid ${colorConstants.maroon()}`
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%'
	},
	gridItem: {
		minWidth: '20%',
		height: '55px',
		boxSizing: 'border-box',
		backgroundColor: colorConstants.red(),
		borderRadius: '5px',
		margin: '30px 10px',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'no-wrap',
	},
	gridItemCheck: {
		width: '40px',
		borderRadius: '5px 0 0 5px',
		backgroundColor: colorConstants.purple()
	},
	gridItemCheckImg: {
		position: 'relative',
		left: '5px',
		top: '5px'
	},
	gridItemText: {
		width: 'auto',
		boxSizing: 'padding-box',
		textAlign: 'right',
		padding: '0 10px',
		alignSelf: 'center'
	}
});

export default Amenities;