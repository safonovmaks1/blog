import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { PAGINATION_LIMIT } from '../../constants';
import { request } from '../../utils/request';
import { Pagination, PostCard, Search } from './components';
import { debounce } from './utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		request(
			`/posts?search-${searchPhrase}&page-${page}&limit-${PAGINATION_LIMIT}`,
		).then(({ data: { posts, lastPage } }) => {
			setPosts(posts);
			setLastPage(lastPage);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="post-header">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />

				{posts.length > 0 ? (
					<div className="post-list ">
						{posts.map(({ id, title, imageUrl, publishedAt, comments }) => (
							<PostCard
								key={id}
								id={id}
								title={title}
								imageUrl={imageUrl}
								publishedAt={publishedAt}
								commentsCount={comments.length}
							/>
						))}
					</div>
				) : (
					<div className="no-post-founds">Статьи не найдены.</div>
				)}
			</div>

			<div className="post-footer">
				{lastPage > 1 && posts.length > 0 && (
					<Pagination page={page} lastPage={lastPage} setPage={setPage} />
				)}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-list {
		margin-block: 3rem;
		display: grid;
		/* grid-template-columns: repeat(3, 1fr); */
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-auto-flow: dense;
		gap: 2rem;
		height: 100%;
	}

	& .no-post-founds {
		margin-top: 3rem;
		text-align: center;
		font-weight: 600;
	}
`;
