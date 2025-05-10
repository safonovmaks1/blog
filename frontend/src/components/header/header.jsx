import styled from 'styled-components';
import { Container } from '../container/container';
import { ControlPanel, Logo } from './components';

const Description = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.1rem;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Container>
			<div className="flex-sb">
				<Logo />

				<Description>
					<span>Веб-технологии</span>
					<span>Написание кода</span>
					<span>Разбор ошибок</span>
				</Description>
				<ControlPanel />
			</div>
		</Container>
	</header>
);

export const Header = styled(HeaderContainer)`
	position: fixed;
	padding: 0.5rem 0;
	width: 100%;
	box-shadow: 0 5px 5px var(--shadow);
	background-color: var(--container-color);
	z-index: 10;

	& .flex-sb {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
