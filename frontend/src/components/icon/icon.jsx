import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = ({ className, id, inactive, isdel, ...props }) => (
	<div className={className} {...props}>
		<i className={`${id}`}></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '1.5rem' }) => size};
	line-height: 1;
	color: ${({ disabled }) => (disabled ? '#ccc' : 'var(--title-color)')};

	&:hover {
		cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
		color: ${({ isdel }) => (isdel ? 'red' : 'var(--title-color)')};
	}
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
	inactive: PropTypes.bool,
	isdel: PropTypes.bool,
};
