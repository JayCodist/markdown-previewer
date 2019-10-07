import React from 'react';
import ReactDOM from 'react-dom';
import createDOMPurify from 'dompurify';
import marked from 'marked';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './styles/index.css';

const DOMPurify = createDOMPurify();
marked.setOptions(
{
	gfm: true,
	breaks: true
});
const App = props =>
{
	const [input, setInput] = React.useState(sampleInput);
	const [output, setOutput] = React.useState(DOMPurify.sanitize(marked(input)));
	const applyChanges = data =>
	{
		setInput(data);
		setOutput(DOMPurify.sanitize(marked(data)));
	};

	return (
	<div id="container">
		<h1>The Markdown Previewer</h1>
		<section id="components">
			<Editor 
				input={input} 
				onChange={applyChanges} 
			/>
			<Previewer output={output}/>
		</section>
	</div>
		);
}

const sampleInput = `
# Welcome to my React Markdown Previewer!

## Using Hooks
Here's some code, \`<div></div>\`, between 2 backticks
\`\`\`
// this is multi-line code:

const anotherExample = (firstLine, lastLine) =>
{
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`')
    return multiLineCode;
}
\`\`\`
You can also make text **bold**... or _italic_.
There's also [links](https://github.com/jaycodist), and
> Block Quotes!
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
And images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;


ReactDOM.render(<App />, document.getElementById("root"));