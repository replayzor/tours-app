import { useEffect, useState } from "react";

// components
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const resp = await fetch(url);
			const data = await resp.json();
			setTours(data);
			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no tours left</h2>
					<button onClick={fetchTours} className="btn">
						refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App;
