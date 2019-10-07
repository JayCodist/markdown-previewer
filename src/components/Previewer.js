import React from 'react';
import '../styles/Previewer.css';

const Previewer = props =>
{
	
	return (
		<div id="preview-container">
			<div id="preview-header">Previewer</div>
			{/*<div id="preview">
				{props.output}
			</div>*/}
			<div id="preview" dangerouslySetInnerHTML={{__html: props.output}}>
						</div>
		</div>);;
}

export default Previewer;