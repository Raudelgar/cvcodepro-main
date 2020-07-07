import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import useWindowSize from '../../hooks/useWindowSize.js';
import './View.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		overflowX: 'hidden',
		overflowY: 'auto',
	},
	container: {
		width: '100%',
		margin: '0',
		flexGrow: 1,
		padding: theme.spacing(2),
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
}));

function Bye({ handleImageLoad }) {
	const classes = useStyles();
	const windowSize = useWindowSize();
	const [imgSize, setImgSize] = useState('');

	useEffect(() => {
		const element = window.document.getElementById('imgCard');
		let w = element.clientWidth;

		if (w > 640) {
			w = 640;
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
					<Paper className={classes.paper} square id='imgCard' elevation={0}>
						<img
							src='/assets/itfire.gif'
							alt='It Fire LOL'
							width={imgSize}
							onLoad={handleImageLoad}
						/>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper} square elevation={0}>
						<Typography variant='h2' className={classes.textHeader}>
							Thank You!!
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			<div className={classes.paper}>
				<Typography variant='caption' color='textSecondary'>
					Copyright Ⓒ 2020 CvCodePro Inc. All rights reserved.
				</Typography>
			</div>
		</Box>
	);
}

export default Bye;
