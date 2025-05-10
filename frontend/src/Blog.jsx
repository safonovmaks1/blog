import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { setUser } from './actions';
import { Container, Error, Footer, Header, Modal } from './components';
import { ERROR } from './constants';
import { Authorization, Main, Post, Registration, Users } from './pages';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	min-height: 100%;
`;

const Page = styled.div`
	margin-top: var(--header-height);
	padding: 5rem 0;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />

			<Container>
				<Page>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/users" element={<Users />} />
						<Route path="/post" element={<Post />} />
						<Route path="/post/:id" element={<Post />} />
						<Route path="/post/:id/edit" element={<Post />} />
						<Route
							path="*"
							element={<Error error={ERROR.PAGE_NOT_EXIST} />}
						/>
					</Routes>
				</Page>
			</Container>

			<Footer />
			<Modal />
		</AppColumn>
	);
};
