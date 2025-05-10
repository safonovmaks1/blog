import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../container/container';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Murino&units=metric&lang=ru&appid=46297655aa21252b09e3f6889fbae609',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<footer className={className}>
			<Container>
				<div className="flex-sb">
					<div>
						<p>Блог веб-разработчика</p>
						<p>safonovmaks1@yandex.ru</p>
					</div>

					<div>
						<p>
							{city},{' '}
							{new Date().toLocaleString('ru', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</p>
						<p>
							{temperature} градусов, {weather}
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	position: fixed;
	bottom: 0;

	padding: 0.75rem 0;
	width: 100%;
	box-shadow: 0 -5px 5px var(--shadow);
	font-weight: 600;
	line-height: 1.2;
	background-color: var(--container-color);
	z-index: 10;

	& .flex-sb {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
