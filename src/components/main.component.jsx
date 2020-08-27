import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import history from '../assets/history.json';
import CumulativeTable from './cumulativeTable.component';

function Main() {
	const dataHistory = history;
	dataHistory.sort(function(a, b) {
		return a.year - b.year;
	});
	const [ minVal, setMinVal ] = useState(2000);
	const [ maxVal, setMaxVal ] = useState(2019);
	const [ dataHist, setData ] = useState(dataHistory);

	const updateRange = (event, newValue) => {
		console.log(newValue);
		const minId = dataHistory.findIndex((x) => x.year === newValue[0]);
		const maxId = dataHistory.findIndex((x) => x.year === newValue[1]);
		const hist = dataHistory.slice(minId, maxId + 1);
		setData(hist);
		setMinVal(newValue[0]);
		setMaxVal(newValue[1]);
	};
	return (
		<div style={{ width: '90%', margin: 'auto' }}>
			<input type="text" id="min" value={minVal} />
			<br />
			<input type="text" id="max" value={maxVal} />
			<Slider value={[ minVal, maxVal ]} onChange={updateRange} valueLabelDisplay="auto" min={1926} max={2019} />
			<CumulativeTable data={[ dataHist ]} />
		</div>
	);
}

export default Main;
