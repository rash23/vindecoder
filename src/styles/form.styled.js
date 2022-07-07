import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.section`
	max-width: 500px;
	padding: 16px;
	border: 1px solid gray;
	border-radius: 6px;
	margin: 40px;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const StyledInput = styled.input`
	margin-top: 6px;
	padding: 6px;
	width: 100%;
`;

export const StyledError = styled.div`
	font-size: 14px;
	padding: 10px 0px;
	color: tomato;
`;

export const StyleButton = styled.button`
	padding: 10px;
	border: 1px solid black;
	cursor: pointer;
	border-radius: 4px;
	background-color: lightgrey;
	width: 100%;
	&:hover {
		background-color: grey;
	}
`;

export const StyledLink = styled(NavLink)`
	color: green;
	font-weight: bold;
`;
