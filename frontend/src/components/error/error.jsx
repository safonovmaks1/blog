import styled from 'styled-components';
import { PROP_TYPE } from '../../constants';
import { Title } from '../title/title';

const Div = styled.div`
	text-align: center;
	font-size: 1.2rem;
`;
export const Error = ({ error }) => {
	return (
		error && (
			<Div>
				<Title>Ошибка</Title>
				<div>{error}</div>
			</Div>
		)
	);
};

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
