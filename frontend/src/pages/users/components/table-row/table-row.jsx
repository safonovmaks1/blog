import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => (
	<div className={className}> {children}</div>
);
export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;

	${({ border }) => (border ? 'border: 1px solid #000;' : 'none;')}
	/* border: ${({ border }) => (border ? '1px solid #000' : 'none')} */
	& > div {
		padding: 0.5rem 1rem;
	}

	& .login-column {
		width: 10rem;
	}

	& .registered-at-column {
		width: 14rem;
	}

	& .role-column {
		width: 14rem;

		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
