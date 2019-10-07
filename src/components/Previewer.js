import React from 'react';
import '../styles/Previewer.css';

const Previewer = props =>
{
	React.useEffect(() => 
	{
		for (let item of document.querySelectorAll("#preview a"))
			item.setAttribute("target", "_blank");
	})
	return (
		<div id="preview-container">
			<div id="preview-header">Previewer</div>
			<div id="preview" dangerouslySetInnerHTML={{__html: props.output}}>
			</div>
		</div>);;
}

export default Previewer;