import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>`;

const buttonTagsCode = `<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">`;

const outlineButtonsCodes = `<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>`;

const sizeLargeCode = `<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>`;

const sizeSmallCode = `<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>`;

const sizeBlockCode = `<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>`;

const activeStateCode = `<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>`;

const disabledCode = `<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>`;

const disabledAtagCode = `<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>`;

const toggleStateCode = `<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button>`;

const checkboxCode = `<div class="btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="checkbox" checked autocomplete="off"> Checked
  </label>
</div>`;

const radioGroupCode = `<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio
  </label>
</div>`;

class Buttons extends React.Component {
  render() {
    return (
      <Layout>
        <h1>버튼</h1>

        <hr />

        <h2>샘플</h2>

        <div>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>

          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>버튼 태그</h2>

        <div>
          <a className="btn btn-primary" href="#" role="button">
            Link
          </a>
          <button className="btn btn-primary" type="submit">
            Button
          </button>
          <input className="btn btn-primary" type="button" value="Input" />
          <input className="btn btn-primary" type="submit" value="Submit" />
          <input className="btn btn-primary" type="reset" value="Reset" />
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {buttonTagsCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>아웃라인 버튼</h2>

        <div>
          <button type="button" className="btn btn-outline-primary">
            Primary
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-outline-success">
            Success
          </button>
          <button type="button" className="btn btn-outline-danger">
            Danger
          </button>
          <button type="button" className="btn btn-outline-warning">
            Warning
          </button>
          <button type="button" className="btn btn-outline-info">
            Info
          </button>
          <button type="button" className="btn btn-outline-light">
            Light
          </button>
          <button type="button" className="btn btn-outline-dark">
            Dark
          </button>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {outlineButtonsCodes}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>사이즈</h2>

        <div>
          <button type="button" className="btn btn-primary btn-lg">
            Large button
          </button>
          <button type="button" className="btn btn-secondary btn-lg">
            Large button
          </button>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizeLargeCode}
          </SyntaxHighlighter>
        </div>

        <div>
          <button type="button" className="btn btn-primary btn-sm">
            Small button
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            Small button
          </button>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizeSmallCode}
          </SyntaxHighlighter>
        </div>

        <div>
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Block level button
          </button>
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Block level button
          </button>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizeBlockCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>
          활성 상태 <small>Active state</small>
        </h2>

        <div>
          <a
            href="#"
            className="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Primary link
          </a>
          <a
            href="#"
            className="btn btn-secondary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Link
          </a>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {activeStateCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>
          비활성 상태 <small>Disabled state</small>
        </h2>

        <div>
          <button type="button" className="btn btn-lg btn-primary" disabled>
            Primary button
          </button>
          <button type="button" className="btn btn-secondary btn-lg" disabled>
            Button
          </button>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledCode}
          </SyntaxHighlighter>
        </div>

        <div>
          <a
            href="#"
            className="btn btn-primary btn-lg disabled"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            Primary link
          </a>
          <a
            href="#"
            className="btn btn-secondary btn-lg disabled"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            Link
          </a>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledAtagCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>버튼 플러그인</h2>

        <h3>
          상태 토글 <small>Toggle state</small>
        </h3>

        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            Single toggle
          </button>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {toggleStateCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h3>체크박스와 라디오 버튼</h3>

        <div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="checkbox" checked autoComplete="off" /> Checked
            </label>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {checkboxCode}
          </SyntaxHighlighter>
        </div>

        <div>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                checked
              />{' '}
              Active
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
              />{' '}
              Radio
            </label>
            <label className="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
              />{' '}
              Radio
            </label>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {radioGroupCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Buttons;
