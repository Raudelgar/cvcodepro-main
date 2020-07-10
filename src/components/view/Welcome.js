import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import useWindowSize from '../../hooks/useWindowSize.js';
import SimpleForm from '../form/SimpleForm.js';
import './View.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		overflowX: 'none',
		overflowY: 'scroll',
	},
	container: {
		width: '97%',
		margin: '0 auto',
		flexGrow: 1,
		// padding: theme.spacing(2),
	},
	paper: {
		textAlign: 'center',
		padding: theme.spacing(2),
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	textHeader: {
		color: '#0d47a1',
		fontWeight: 500,
	},
	footer: {
		display: 'flex',
		flexDirection: 'columns',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '30px',
		padding: '10px',
	},
}));

function Welcome({ setSubmitted, handleImageLoad }) {
	const classes = useStyles();
	const windowSize = useWindowSize();
	const [imgSize, setImgSize] = useState('');

	useEffect(() => {
		const element = window.document.getElementById('imgCard');
		let w = element.clientWidth;

		if (w > 1075) {
			w = 1075;
		}
		setImgSize(`${w}px`);
	}, [windowSize]);

	return (
		<Box className={`${classes.root} animated`}>
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center'
				spacing={0}
				className={classes.container}
			>
				<Grid item xs={12}>
					<Paper className={classes.paper} square id='imgCard'>
						<img
							src='/assets/img1.png'
							alt='code office'
							width={imgSize}
							onLoad={handleImageLoad}
						/>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper} square>
						<Typography variant='h3' className={classes.textHeader}>
							We are on it!
						</Typography>
						<Typography paragraph color='textPrimary'>
							You don't want to miss this. Sign up to receive a first hand
							notification when CvCodePro is ready.
						</Typography>

						<SimpleForm setSubmitted={setSubmitted} />
					</Paper>
				</Grid>
			</Grid>
			<div className={classes.footer}>
				<Typography variant='caption' color='textSecondary'>
					Copyright Ⓒ 2020 CvCodePro Inc. All rights reserved.
				</Typography>
			</div>
		</Box>
	);
}

export default Welcome;
