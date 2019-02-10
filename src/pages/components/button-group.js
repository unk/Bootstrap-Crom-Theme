import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>`;

const toolbarCode = `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary">8</button>
  </div>
</div>`;

const mixInputGroupCode = `<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon">@</div>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text" id="btnGroupAddon2">@</div>
    </div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>`;

const sizingCode = `<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>`;

const nestingCode = `<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-secondary">1</button>
  <button type="button" class="btn btn-secondary">2</button>

  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
</div>`;

const verticalVariationCode = `<div class="btn-group-vertical">
  ...
</div>`;

class ButtonGroup extends React.Component {
  render() {
    return (
      <Layout>
        <h1>버튼 그룹</h1>

        <h2>샘플</h2>

        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">
              Left
            </button>
            <button type="button" className="btn btn-secondary">
              Middle
            </button>
            <button type="button" className="btn btn-secondary">
              Right
            </button>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>버튼 툴바</h2>

        <div>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-secondary">
                1
              </button>
              <button type="button" className="btn btn-secondary">
                2
              </button>
              <button type="button" className="btn btn-secondary">
                3
              </button>
              <button type="button" className="btn btn-secondary">
                4
              </button>
            </div>
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-secondary">
                5
              </button>
              <button type="button" className="btn btn-secondary">
                6
              </button>
              <button type="button" className="btn btn-secondary">
                7
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary">
                8
              </button>
            </div>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {toolbarCode}
          </SyntaxHighlighter>
        </div>

        <div>
          <div
            className="btn-toolbar mb-3"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-secondary">
                1
              </button>
              <button type="button" className="btn btn-secondary">
                2
              </button>
              <button type="button" className="btn btn-secondary">
                3
              </button>
              <button type="button" className="btn btn-secondary">
                4
              </button>
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon">
                  @
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </div>
          </div>

          <div
            className="btn-toolbar justify-content-between"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div className="btn-group" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary">
                1
              </button>
              <button type="button" className="btn btn-secondary">
                2
              </button>
              <button type="button" className="btn btn-secondary">
                3
              </button>
              <button type="button" className="btn btn-secondary">
                4
              </button>
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon2">
                  @
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              />
            </div>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {mixInputGroupCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>사이즈</h2>

        <div>
          <div>
            <div
              className="btn-group btn-group-lg"
              role="group"
              aria-label="..."
            >
              <button type="button" className="btn btn-secondary">
                Left
              </button>
              <button type="button" className="btn btn-secondary">
                Middle
              </button>
              <button type="button" className="btn btn-secondary">
                Right
              </button>
            </div>
          </div>
          <div>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-secondary">
                Left
              </button>
              <button type="button" className="btn btn-secondary">
                Middle
              </button>
              <button type="button" className="btn btn-secondary">
                Right
              </button>
            </div>
          </div>
          <div>
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="..."
            >
              <button type="button" className="btn btn-secondary">
                Left
              </button>
              <button type="button" className="btn btn-secondary">
                Middle
              </button>
              <button type="button" className="btn btn-secondary">
                Right
              </button>
            </div>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizingCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>
          중첩 <small>Nesting</small>
        </h2>

        <div>
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className="btn btn-secondary">
              1
            </button>
            <button type="button" className="btn btn-secondary">
              2
            </button>

            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {nestingCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default ButtonGroup;
