import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { savePostAsync } from '../../../../actions';
import { Icon, Input } from '../../../../components';
import { PROP_TYPE } from '../../../../constants';
import { SpecialPanel } from '../special-panel/special-panel';
import { sanitizeContent } from './utils';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(id, {
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);

	return (
		<div className={className}>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				editButton={<Icon id="ri-save-3-line" onClick={onSave} />}
			/>

			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={onTitleChange}
			/>

			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="text">
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	gap: 1rem;
	width: 800px;

	.text {
		min-height: 5rem;
		padding: 1rem 1rem 1rem 2rem;

		font-size: 1.2rem;
		line-height: 1.5;
		white-space: pre-line;

		border: 1px solid var(--first-color);
		border-radius: 0.5rem;

		color: var(--title-color);
	}
`;

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
