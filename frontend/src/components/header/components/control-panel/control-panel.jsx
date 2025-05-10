import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../../../actions';
import { Button, Icon } from '../../../../components';
import { ROLE } from '../../../../constants';
import { selectUserLogin, selectUserRole } from '../../../../selectors';
import { checkAccess } from '../../../../utils';

const RightAligned = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const UserName = styled.div`
	font-size: 1.3rem;
	font-weight: 600;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				<Icon id="ri-arrow-go-back-fill" onClick={() => navigate(-1)} />

				{isAdmin && (
					<>
						<Link to="/post">
							<Icon id="ri-file-text-line" />
						</Link>
						<Link to="/users">
							<Icon id="ri-group-fill" />
						</Link>
					</>
				)}

				{roleId === ROLE.GUEST ? (
					<Button>
						<Link className="white" to="/login">
							Войти
						</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>

						<Icon id="ri-logout-box-r-line" onClick={onLogout} />
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	& .white {
		color: #fff;
	}
`;
