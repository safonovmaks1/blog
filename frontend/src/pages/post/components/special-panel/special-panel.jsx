import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { Icon } from '../../../../components';
import { ROLE } from '../../../../constants';
import { selectUserRole } from '../../../../selectors';
import { checkAccess } from '../../../../utils';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userRole = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(id)).then(() => {
						navigate(`/`);
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

	return (
		<div className={className}>
			<div className="date">
				{publishedAt && <Icon inactive="true" id="ri-calendar-2-line" />}
				<span>{publishedAt}</span>
			</div>

			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							isdel="true"
							id="ri-delete-bin-line"
							className="red"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	margin: 1rem 0;

	& .date,
	& .buttons {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
`;

SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};
