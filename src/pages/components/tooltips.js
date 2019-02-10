import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';
import $ from 'jquery';

const exampleCode = `<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  Tooltip on left
</button>`;

const disabledElementsCode = `<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>`;

class Tooltips extends React.Component {
  render() {
    return (
      <Layout>
        <h1>툴팁</h1>

        <h2>샘플</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-secondary"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip on top"
          >
            Tooltip on top
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-toggle="tooltip"
            data-placement="right"
            title="Tooltip on right"
          >
            Tooltip on right
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Tooltip on bottom"
          >
            Tooltip on bottom
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-toggle="tooltip"
            data-placement="left"
            title="Tooltip on left"
          >
            Tooltip on left
          </button>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>비활성화된 요소에 적용시</h2>
        <div className="mb-2">
          <span
            className="d-inline-block"
            tabIndex="0"
            data-toggle="tooltip"
            title="Disabled tooltip"
          >
            <button
              className="btn btn-primary"
              style={{pointerEvents: 'none'}}
              type="button"
              disabled
            >
              Disabled button
            </button>
          </span>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledElementsCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }
}

export default Tooltips;
