interface ChuckJokeProps {
	id: number;
	joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({id,joke}) => {

	return (
		<p>{id}: {joke}</p>
	)
}

export default ChuckJoke;