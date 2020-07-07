import React, { useState, useEffect } from 'react';
import Welcome from '../view/Welcome.js';
import Bye from '../view/Bye.js';
import LogoLoader from '../loader/LogoLoader.js';

function App() {
	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [contentReady, setContentReady] = useState(false);

	useEffect(() => {
		const delay = setTimeout(() => {
			setContentReady(true);
		}, 2000);

		return () => clearTimeout(delay);
	}, [isLoading]);

	const handleImageLoad = () => {
		setLoading(false);
	};

	if (!contentReady) {
		return <LogoLoader isLoading={isLoading} />;
	} else if (!submitted) {
		return (
			<Welcome setSubmitted={setSubmitted} handleImageLoad={handleImageLoad} />
		);
	} else {
		return <Bye handleImageLoad={handleImageLoad} />;
	}
}

export default App;
