import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import { Button } from '../button/button';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button onClick={onConfirm}>Да</Button>
					<Button onClick={onCancel}>Отмена</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	inset: 0;
	text-align: center;

	& .overlay {
		position: absolute;

		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
	}

	& .box {
		position: relative;

		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		padding: 1rem;

		width: 300px;
		background-color: #fff;
		border-radius: 0.5rem;
	}

	& .buttons {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
`;
