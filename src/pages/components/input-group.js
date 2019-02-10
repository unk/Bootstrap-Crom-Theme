import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">@example.com</span>
  </div>
</div>

<label for="basic-url">Your vanity URL</label>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">With textarea</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>`;

const wrappingCode = `<div class="input-group flex-nowrap">
  <div class="input-group-prepend">
    <span class="input-group-text" id="addon-wrapping">@</span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>`;

const sizingCode = `<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>`;

const checkboxAndRadioCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" aria-label="Checkbox for following text input">
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="radio" aria-label="Radio button for following text input">
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>`;

const multipleInputsCode = `<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">First and last name</span>
  </div>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>`;

const multipleAddonsCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
  </div>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <div class="input-group-append">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
  </div>
</div>`;

const buttonAddonsCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend" id="button-addon3">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
  <div class="input-group-append" id="button-addon4">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>`;

const buttonWithDropdownsCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>`;

const segmentedButtonsCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <div class="input-group-append">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>`;

const customSelectFormsCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group mb-3">
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="input-group-append">
    <label class="input-group-text" for="inputGroupSelect02">Options</label>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
  <select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group">
  <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>`;

const customFileInputCode = `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>

<div class="input-group mb-3">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile02">
    <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
  </div>
  <div class="input-group-append">
    <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03">
    <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
  </div>
</div>

<div class="input-group">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
    <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
  </div>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
  </div>
</div>`;

class InputGroup extends React.Component {
  render() {
    return (
      <Layout>
        <h1>인풋 그룹</h1>

        <h2>샘플</h2>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
          </div>

          <label htmlFor="basic-url">Your vanity URL</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                https://example.com/users/
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">With textarea</span>
            </div>
            <textarea className="form-control" aria-label="With textarea" />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>
          래핑 <small>Wrapping</small>
        </h2>
        <div className="mb-2">
          <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {wrappingCode}
          </SyntaxHighlighter>
        </div>

        <h2>사이즈 조절</h2>
        <div className="mb-2">
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Small
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Default
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                Large
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizingCode}
          </SyntaxHighlighter>
        </div>

        <h2>체크박스와 라디오 버튼</h2>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
            />
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with radio button"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {checkboxAndRadioCode}
          </SyntaxHighlighter>
        </div>

        <h2>다중 인풋</h2>
        <div className="mb-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">First and last name</span>
            </div>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {multipleInputsCode}
          </SyntaxHighlighter>
        </div>

        <h2>다중 애드온</h2>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <div className="input-group-append">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {multipleAddonsCode}
          </SyntaxHighlighter>
        </div>

        <h2>버튼 애드온</h2>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Button
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend" id="button-addon3">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            />
            <div className="input-group-append" id="button-addon4">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {buttonAddonsCode}
          </SyntaxHighlighter>
        </div>

        <h2>드롭 다운 버튼</h2>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {buttonWithDropdownsCode}
          </SyntaxHighlighter>
        </div>

        <h2>버튼 분리형 드롭다운</h2>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button type="button" className="btn btn-outline-secondary">
                Action
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with segmented dropdown button"
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with segmented dropdown button"
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-secondary">
                Action
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {segmentedButtonsCode}
          </SyntaxHighlighter>
        </div>

        <h2>커스텀 폼</h2>
        <h3>커스텀 셀렉트</h3>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <select className="custom-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="input-group-append">
              <label className="input-group-text" htmlFor="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="input-group">
            <select
              className="custom-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customSelectFormsCode}
          </SyntaxHighlighter>
        </div>

        <h3>커스텀 파일 인풋</h3>
        <div className="mb-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">
                Upload
              </span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile02"
              />
              <label
                className="custom-file-label"
                htmlFor="inputGroupFile02"
                aria-describedby="inputGroupFileAddon02"
              >
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text" id="inputGroupFileAddon02">
                Upload
              </span>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon03"
              >
                Button
              </button>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile03">
                Choose file
              </label>
            </div>
          </div>

          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile04">
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon04"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customFileInputCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default InputGroup;
