import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	headerLabel: {
		fontWeight: 'bold',
		fontSize: '18px'
	}
});

const CumulativeTable = (props) => {
	const classes = useStyles();
	const data = props.data[0];
	const baseReturn = data[0].totalReturn;
	const baseVal = 100;
	var currVal = 100;
	function cumulativeReturns(curr_return) {
		var curr = baseVal;
		if (curr_return === baseReturn) {
			currVal = (parseFloat(curr) + parseFloat(curr_return)).toFixed(2);
			return baseReturn;
		} else {
			currVal = (parseFloat(currVal) + parseFloat(currVal) * (parseFloat(curr_return) / 100)).toFixed(2);
			return (currVal - baseVal).toFixed(2);
		}
	}
	return (
		<div>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.headerLabel} align="center">
								Year
							</TableCell>
							<TableCell className={classes.headerLabel} align="center">
								Total Return
							</TableCell>
							<TableCell className={classes.headerLabel} align="center">
								Cumulative Return
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((data, index) => {
							return (
								<TableRow key={index}>
									<TableCell align="center">{data.year}</TableCell>
									<TableCell align="center">{data.totalReturn}</TableCell>
									<TableCell align="center">{cumulativeReturns(data.totalReturn)}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default CumulativeTable;
