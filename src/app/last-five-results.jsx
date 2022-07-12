import { StyledContainer, StyleButton } from '../styles/form.styled';
import { StyledTitle, StyledWrap } from '../styles/results.styled';
import { Card } from './card';
import { request } from '../helpers/request';
import { useState } from 'react';
import { StyledLink } from '../styles/form.styled';

const LastFiveVins = () => {
	const [state, setState] = useState();

	const store = JSON.parse(sessionStorage.getItem('storage'));

	let reverseArr = store ? Object.values(store).reverse() : [];

	const decodeVin = async (e) => {
		e.preventDefault();

		if (e.target.tagName === 'BUTTON') {
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
				<StyledWrap onClick={decodeVin}>
					{Object.entries(reverseArr).map((item, index) => {
						if (Number(index) <= 4) {
							return <StyleButton key={index}>{item[1].obj}</StyleButton>;
						}
						return false;
					})}
				</StyledWrap>
			</StyledContainer>
			<Card data={state} />
		</>
	);
};

export default LastFiveVins;
