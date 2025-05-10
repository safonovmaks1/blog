import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleContainer = ({ children, className }) => {
	return <h2 className={className}>{children}</h2>;
};

export const Title = styled(TitleContainer)`
	margin-bottom: 1rem;
	text-align: center;
	font-size: 1.6rem;
	line-height: 1.1;
`;

Title.propTypes = {
	children: PropTypes.node.isRequired,
};
