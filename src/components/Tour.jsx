import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
	const [readMore, setReadMore] = useState(false);

	return (
		<div>
			<article className="single-tour">
				<img src={image} alt={name} />
				<footer>
					<div className="tour-info">
						<h4>{name}</h4>
						<h4 className="tour-price">${price}</h4>
					</div>
					<p>
						{readMore ? info : `${info.substring(0, 200)}...`}
						<button onClick={() => setReadMore(!readMore)}>
							{readMore ? "show less" : "read more"}
						</button>
					</p>
					<button onClick={() => removeTour(id)} className="delete-btn">
						not interested
					</button>
				</footer>
			</article>
		</div>
	);
};

export default Tour;
