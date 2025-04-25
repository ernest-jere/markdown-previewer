
import ReactDOM from 'react-dom/client';
import './index.css';
import React, { Component } from 'react';
import {marked} from 'marked';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '# Markdown Text'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    const { markdown } = this.state;
    const preview = marked(markdown);

    return (
      <div>
	<h1 style={{textAlign: 'center'}}>Text Editor</h1>
        <textarea
	  id="editor"
          value={markdown}
          onChange={this.handleChange}
          placeholder="Enter Markdown"
        />
	<h1 style={{textAlign: 'center'}}>Markdown Previewer</h1>
        <div
	  id="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
          style={{ border: '1px solid #ddd', padding: '10px', marginTop: '10px', backgroundColor: 'white'}}
        />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>
);


