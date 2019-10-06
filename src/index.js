import React from 'react';
import ReactDOM from 'react-dom';
import createDOMPurify from 'dompurify';
import marked from 'marked';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './styles/index.css';

const App = props =>
{
	let DOMpurify = createDOMPurify();
	let safePartial = DOMpurify.sanitize(marked("# Marked in the browser\n\nRendered by **marked**."));
	return (
		<div dangerouslySetInnerHTML={{__html: safePartial}}>
		</div>);
}

ReactDOM.render(<App />, document.getElementById("root"));