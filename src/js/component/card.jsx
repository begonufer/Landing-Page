import React from "react";

const Image = () => {
	return (
		<>
			<img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22287%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20287%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_186a6e99bb4%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_186a6e99bb4%22%3E%3Crect%20width%3D%22287%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.6875%22%20y%3D%2296.20000038146972%22%3E287x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="card-img-top" alt="..."></img>
		</>
	)
}

const Body = (props) => {
	return (
		<>
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
    			<p className="card-text" >{props.lorem}</p>
  			</div>
		</>
	)
}

const Footer = () => {
	return (
		<>
			<div className="card-footer text-muted">
				<a href="#" className="btn btn-primary">Find Out More!</a>
			</div>
		</>
	)
}

const Card = (props) => {
	return (
		<>
			<div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
				<div className="card text-center my-2">
					<Image />
					<Body title={props.tituloCard} lorem={props.text}/>
					<Footer />
				</div>
			</div>

		</>
	)
};

export default Card