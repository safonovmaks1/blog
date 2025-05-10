import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>
			<Icon inactive="true" size="2rem" id="ri-search-line" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	position: relative;
	display: flex;
	align-items: center;
	margin-inline: auto;
	width: 360px;

	& > input {
		padding-right: 2.5rem;
	}

	& > div {
		position: absolute;
		right: 0.5rem;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
