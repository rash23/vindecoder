import { StyledCard, StyledWrap, StyledTitle } from '../styles/card.styled';

export const Card = (props) => {
	const { data } = props;

	return (
		data && (
			<StyledCard>
				{Object.entries(data).map((item) => {
					return (
						item[1] && (
							<StyledWrap key={item[0]}>
								<StyledTitle key={item[1]}>{item[0]}</StyledTitle>
								<div>{item[1]}</div>
							</StyledWrap>
						)
					);
				})}
			</StyledCard>
		)
	);
};
