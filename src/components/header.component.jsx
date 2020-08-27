import React from 'react';
import { AppBar } from '@material-ui/core';
import '../css/header.styles.scss';

function Header() {
	// const classes = useStyles();
	return (
		<AppBar position="sticky">
			<div className="appHeader">
				<div className="title">S&P 500 Yearly Total Returns and Cumulative Returns</div>
			</div>
		</AppBar>
	);
}

export default Header;
