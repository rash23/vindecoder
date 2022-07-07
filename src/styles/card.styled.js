import styled from 'styled-components';

export const StyledCard = styled.div`
	max-width: 500px;
	padding: 16px;
	border: 1px solid gray;
	border-radius: 6px;
	margin: 40px;
`;

export const StyledWrap = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 10px;
	gap: 10px;
	border: 1px solid gray;
	padding: 10px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledTitle = styled.div`
	font-weight: bold;
	color: green;
`;
