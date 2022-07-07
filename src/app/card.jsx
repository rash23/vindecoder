import { StyledCard, StyledWrap, StyledTitle } from '../styles/card.styled';

const Card = (props) => {
	if (props.data) {
		const { data } = props;

		return (
			data && (
				<StyledCard>
					{Object.entries(data).map((item, index) => {
						return (
							item[1] && (
								<StyledWrap key={index}>
									<StyledTitle key={index}>{item[0]}</StyledTitle>
									<div>{item[1]}</div>
								</StyledWrap>
							)
						);
					})}
				</StyledCard>
			)
		);
	}
};

export default Card;
