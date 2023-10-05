import '../css/Testimonial.css';

function Testimonial(props) {
	return (
		<div className="testimonial-container">
			<img className="testimonial-image" src={require(`../img/testimonial-${props.image}.jpeg`)} alt="Emma's img" />
			<div className="container-text-testimonial">
				<p className="name-testimony">
					<strong>{props.name}</strong> en {props.country}
				</p>
				<p className="charge-testimony">
					{props.charge} en <strong>{props.company}</strong>
				</p>
				<p className="text-testimony">"{props.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimonial;
