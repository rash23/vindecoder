import { StyledContainer } from '../styles/form.styled';
import { StyledLi, StyledTitle } from '../styles/results.styled';
import Card from './card';
import { request } from '../helpers/request';
import { useState } from 'react';
import { StyledLink } from '../styles/form.styled';

const LastFiveVins = () => {
	const [state, setState] = useState();

	const arr = JSON.parse(sessionStorage.getItem('storage'));

	let reverseArr = {};

	if (arr) {
		reverseArr = Object.values(arr).reverse();
	}

	const decodeVin = async (e) => {
		e.preventDefault();

		if (e.target.tagName === 'LI') {
			const info = await request(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${e.target.textContent}?format=json`, {
				method: 'GET',
			});
			setState(info.Results[0]);
		}
	};

	return (
		<>
			<StyledContainer>
				<StyledLink to={'/vindecoder'}>Go back</StyledLink>
				<StyledTitle>Last five results:</StyledTitle>
				<ul onClick={decodeVin}>
					{Object.entries(reverseArr).map((item, index) => {
						if (Number(index) <= 4) {
							return <StyledLi key={index}>{item[1].obj}</StyledLi>;
						}
						return false;
					})}
				</ul>
			</StyledContainer>
			<Card data={state} />
		</>
	);
};

export default LastFiveVins;
