import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Title } from '../../../../components';
import { PROP_TYPE } from '../../../../constants';
import { SpecialPanel } from '../special-panel/special-panel';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<Title>{title}</Title>

			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				editButton={
					<Icon
						id="ri-pencil-line"
						onClick={() => navigate(`/post/${id}/edit`)}
					/>
				}
			/>

			<div className="text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	margin-bottom: 2rem;

	& img {
		margin: 0 1.5rem 1.5rem 0;
		width: 480px;
		float: left;
	}

	h2 {
		text-align: left;
	}

	.text {
		font-size: 1.2rem;
		line-height: 1.5;
		white-space: pre-line;
	}
`;

PostContent.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
