import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const LargeText = styled.div`
	font-size: 2rem;
	font-weight: 600;
	line-height: 2rem;
`;

const SmallText = styled.div`
	font-size: 1rem;
	font-weight: 400;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="ri-code-s-slash-line" size="3.5rem" />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
