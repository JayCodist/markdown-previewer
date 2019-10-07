import React from 'react';
import '../styles/Editor.css';

const Editor = props =>
{
	return (
		<div id="editor-container">
			<div id="editor-header">Editor</div>
			<textarea id="editor" value={props.input} onChange={e => props.onChange(e.target.value)}>
			</textarea>
		</div>);
}

export default Editor;