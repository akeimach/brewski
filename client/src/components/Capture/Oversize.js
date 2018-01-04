import React from "react";
import ReactFileReader from "react-file-reader";
import { Jumbotron } from 'react-bootstrap';
import Modal from 'react-responsive-modal';

const Oversize = (props) => {
	const modalContent = (
		<div>
			<br />
			<h2>Image File Size Exceeded</h2>
			<p>Please choose an image less than 4MB.</p>
		</div>
	);
	return (
		<div>
		
		</div>
	)
}

export default Oversize;