import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	padding: 0.5rem 1.5rem;
	background-color: hsl(var(--hue), 60%, 50%);
	color: #fff;
	font-weight: 500;
	font-size: 1rem;
	border-radius: var(--border-radius-sm);
	border: 1px solid transparent;
	cursor: pointer;
	transition: var(--transition-default);

	&:hover {
		background-color: hsl(var(--hue), 60%, 30%);
	}

	&:disabled {
		background-color: hsl(var(--hue), 20%, 30%);
		cursor: not-allowed;
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
