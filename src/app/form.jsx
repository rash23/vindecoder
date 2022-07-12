import React from 'react';
import { StyledForm, StyledInput, StyleButton, StyledContainer, StyledError, StyledLink } from '../styles/form.styled';
import { Card } from './card';
import { useState } from 'react';
import { Store } from '../helpers/storage';
import { request } from '../helpers/request';
import { isVin } from '../helpers/isinput';

const store = new Store();

export const VinForm = () => {
	const [inpValue, setInput] = useState('');

	const [state, setState] = useState();
	const [error, setError] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const getInfo = async (vin) => {
		const info = await request(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`, {
			method: 'GET',
		});

		setErrorMessage(info.Message);

		return info.Results[0];
	};

	const decodeVin = async (e) => {
		e.preventDefault();

		if (isVin(inpValue)) {
			const data = await getInfo(inpValue);

			setState(data);
			setInput('');
			setError('');

			store.setState('storage', {
				id: Date.now().toString(),
				obj: inpValue,
			});
		} else {
			setError('Please enter correct VIN. Example: 1FTFW1CT5DFC10312');
		}
	};

	return (
		<>
			<StyledContainer>
				<StyledForm noValidate onSubmit={decodeVin}>
					<p>VIN</p>
					<StyledInput type="text" onChange={(event) => setInput(event.target.value)} value={inpValue} />
					<StyledError>{error}</StyledError>
					<StyleButton type="submit">Decode VIN</StyleButton>
					<StyledError>{errorMessage}</StyledError>
				</StyledForm>
				<StyledLink to={'results'}>Last results</StyledLink>
			</StyledContainer>

			<Card data={state} />
		</>
	);
};
