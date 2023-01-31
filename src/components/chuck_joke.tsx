import Joke from "../joke";

const ChuckJoke: React.FC<Joke> = ({id,joke}) => {

	return (
		<p>{id}: {joke}</p>
	)
}

export default ChuckJoke;