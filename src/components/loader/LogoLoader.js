import React, { useState, useEffect } from 'react';

import './LogoLoader.scss';

export default function LogoLoader({ isLoading }) {
	const [render, setRender] = useState(false);

	useEffect(() => {
		let delay = 0;
		if (isLoading) {
			setRender(true);
		} else if (!isLoading) {
			delay = window.setTimeout(() => {
				setRender(false);
			}, 2000);
		}

		return () => clearTimeout(delay);
	}, [isLoading]);

	if (render) {
		return (
			<div className='bg-loader'>
				<div className='logo-container loader-center'>
					<div className='loader-center'>
						<svg
							version='1.0'
							xmlns='http://www.w3.org/2000/svg'
							width='660.000000pt'
							height='579.000000pt'
							viewBox='0 0 660.000000 579.000000'
							preserveAspectRatio='xMidYMid meet'
							className='logo-icon'
						>
							<metadata>
								Created by potrace 1.10, written by Peter Selinger 2001-2011
							</metadata>
							<g
								transform='translate(0.000000,579.000000) scale(0.100000,-0.100000)'
								fill='#000000'
								stroke='none'
							>
								<path d='M0 4800 l0 -120 3300 0 3300 0 0 120 0 120 -3300 0 -3300 0 0 -120z' />
								<path
									d='M1873 3541 c-33 -27 -50 -99 -32 -133 24 -44 202 -240 462 -508 137
-140 252 -262 257 -271 7 -13 -61 -85 -321 -343 -181 -181 -350 -355 -376
-388 -58 -76 -68 -129 -31 -169 74 -79 119 -66 289 83 104 92 809 787 809 799
0 4 -28 37 -62 72 -35 35 -144 146 -243 248 -598 614 -615 629 -696 629 -19
-1 -44 -9 -56 -19z'
								/>
								<path
									d='M2954 1898 c-30 -34 -54 -75 -54 -93 0 -25 49 -115 63 -115 469 -4
1923 2 1929 8 5 5 17 32 28 61 21 59 16 84 -29 134 l-25 27 -946 0 -947 0 -19
-22z'
								/>
							</g>
						</svg>
					</div>
					<div className='circle-container'></div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
