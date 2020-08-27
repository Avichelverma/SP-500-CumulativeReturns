import React from 'react';
import './App.css';
import Slider from '@material-ui/core/Slider';
import Header from './components/header.component';
import Main from './components/main.component';
import Footer from './components/footer.component';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
