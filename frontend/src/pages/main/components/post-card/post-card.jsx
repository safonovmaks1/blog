import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card">
					<h4 className="sliced-text">{title}</h4>
					<div className="post-card-info">
						<div className="date">
							<Icon inactive="true" id="ri-calendar-2-line" />
							<span>{publishedAt}</span>
						</div>
						<div className="comments">
							<Icon inactive="true" id="ri-chat-1-line" />
							<span>{commentsCount}</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	border: 1px solid #000;
	overflow: hidden;
	border-radius: 0.5rem;

	& img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;

		transition: transform 0.3s ease;
		aspect-ratio: 16/9;

		&:hover {
			transform: scale(1.02);
		}
	}

	& .post-card {
		padding: 1rem;
	}

	& .sliced-text {
		margin-bottom: 1rem;
		width: 330px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& .post-card-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	& .date,
	& .comments {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
