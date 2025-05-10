import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: 100%;
	padding: 1rem 1rem 1rem 2rem;
	font-weight: 500;
	font-size: 1.2rem;
	border: 1px solid var(--first-color);
	border-radius: 0.5rem;
	transition:
		border-color 0.4s,
		box-shadow 0.4s;

	&::placeholder {
		/* color:rgb(89, 250, 186); */
	}
`;
