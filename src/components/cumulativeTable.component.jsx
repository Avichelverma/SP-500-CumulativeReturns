import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CumulativeTable = (props) => {
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
							<TableCell>Year</TableCell>
							<TableCell>Total Returns</TableCell>
							<TableCell>Cumulative Returns</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((data) => {
							return (
								<TableRow>
									<TableCell>{data.year}</TableCell>
									<TableCell>{data.totalReturn}</TableCell>
									<TableCell>{cumulativeReturns(data.totalReturn)}</TableCell>
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
