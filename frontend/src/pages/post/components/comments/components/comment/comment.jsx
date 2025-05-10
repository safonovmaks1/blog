import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../../../actions';
import { Icon } from '../../../../../../components';
import { ROLE } from '../../../../../../constants';
import { selectUserRole } from '../../../../../../selectors';

const CommentContainer = ({ className, postId, id, author, publishedAt, content }) => {
	const dispatch = useDispatch();

	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<div className={className}>
			<div className="wrapper-comment">
				<div className="info-panel">
					<div className="author">
						<Icon id="ri-user-3-fill" />
						<span>{author}</span>
					</div>
					<div className="date">
						<Icon inactive="true" id="ri-calendar-2-line" />
						<span>{publishedAt}</span>
					</div>
				</div>
				<p className="comment-text">{content}</p>
			</div>
			{isAdminOrModerator && (
				<Icon
					inactive="true"
					isdel="true"
					id="ri-delete-bin-line"
					className="red"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	margin-top: 2rem;
	display: flex;
	gap: 0.5rem;

	& .wrapper-comment {
		padding: 1rem;
		width: 100%;
		border: 1px solid black;
	}

	& .info-panel,
	& .author,
	& .date {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	& .info-panel {
		margin-bottom: 1rem;
		justify-content: space-between;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};
