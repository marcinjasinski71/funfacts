const currentDay = document.querySelector('.current-day');
const funFact = document.querySelector('.fun-fact');

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
	'Aby objechać Polskę wzdłuż granic potrzebujesz około 24h.',
	'Chcesz jechać do Rzymu? Nie ważne gdzie jesteś. Wszystkie drogi tam prowadzą.',
	'Zepsuł Ci się komputer? Nie przejmuj się. To zawsze mogło się stać.',
	'Koty gdy śpią, wydają z siebie dźwieki o niskiej częstotliwości.',
	'Chciałbyś lepiej spać? 420 is the answer.',
	'Mieszkańcy Mozambiku śpią około 4,5h dziennie.',
	'Gdybyś chciał pobiec z Czech nad morze, to nie dobiegniesz. To daleko.',
	'Biały kolor ma taką samą przyswajalność bakterii jak czarny',
	'Gdybyś patrzył na ekran przez 24h to znaczy jedno - jesteś głupi.',
	'Wszystkie korporacje na świecie mają jednego szefa.',
	'Hello. How are you today? Feel like shit? Me too. I have to write down those stupid facts.',
];

const day = new Date();
currentDay.textContent = day.toLocaleString('pl', { weekday: 'long' });

const showRandomFact = () => {
	const number = Math.floor(Math.random() * facts.length);
	console.log(number);

	funFact.textContent = facts[number];
};

showRandomFact();
