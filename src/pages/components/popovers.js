import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';
import $ from 'jquery';

const exampleCode = `<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`;

const directionsCode = `<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>`;

const dismissOnNextClickCode = `<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>`;

const disabledElementsCode = `<span class="d-inline-block" data-toggle="popover" data-content="Disabled popover">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>`;

class Popovers extends React.Component {
  render() {
    return (
      <Layout>
        <h1>팝오버</h1>

        <h2>샘플</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-lg btn-danger"
            data-toggle="popover"
            title="Popover title"
            data-content="And here's some amazing content. It's very engaging. Right?"
          >
            Click to toggle popover
          </button>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>방향</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-secondary"
            data-container="body"
            data-toggle="popover"
            data-placement="top"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on top
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            data-container="body"
            data-toggle="popover"
            data-placement="right"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on right
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            data-container="body"
            data-toggle="popover"
            data-placement="bottom"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on bottom
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            data-container="body"
            data-toggle="popover"
            data-placement="left"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          >
            Popover on left
          </button>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {directionsCode}
          </SyntaxHighlighter>
        </div>

        <h2>팝오버 클릭해 닫히게 하기</h2>
        <div className="mb-2">
          <a
            tabIndex="0"
            className="btn btn-lg btn-danger"
            role="button"
            data-toggle="popover"
            data-trigger="focus"
            title="Dismissible popover"
            data-content="And here's some amazing content. It's very engaging. Right?"
          >
            Dismissible popover
          </a>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {dismissOnNextClickCode}
          </SyntaxHighlighter>
        </div>

        <h2>비활성 요소에 적용</h2>
        <div className="mb-2">
          <span
            className="d-inline-block"
            data-toggle="popover"
            data-content="Disabled popover"
          >
            <button
              className="btn btn-primary"
              style={{ pointerEvents: 'none' }}
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
    $('[data-toggle="popover"]').popover();
  }
}

export default Popovers;
