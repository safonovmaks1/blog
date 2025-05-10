import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const Container = styled(ContainerContainer)`
	width: min(var(--container-width), 100% - var(--container-padding-x) * 2);
	margin: 0 auto;
`;

Container.propTypes = {
	children: PropTypes.node.isRequired,
};
