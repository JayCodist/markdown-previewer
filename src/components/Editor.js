import React from 'react';
import '../styles/Editor.css';

const Editor = props =>
{
	return (
		<div id="editor-container">
			<div id="editor-header">Editor</div>
			<textarea id="editor" onChange={e => props.onChange(e.target.value)}>
				{props.input}
			</textarea>
		</div>);
}

export default Editor;