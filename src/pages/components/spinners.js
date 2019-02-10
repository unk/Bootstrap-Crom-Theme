import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

const colorsCode = `<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

const growingCode = `<div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

const growingColorCode = `<div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

const marginCode = `<div class="spinner-border m-5" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

const flexCode = `<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`;

const flexCode2 = `<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
</div>`;

const floatsCode = `<div class="clearfix">
  <div class="spinner-border float-right" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`;

const textAlignCode = `<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`;

const sizeCode = `<div class="spinner-border spinner-border-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

const sizeCode2 = `<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

const buttonsCode = `<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`;

const buttonsCode2 = `<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`;

class Spinners extends React.Component {
  render() {
    return (
      <Layout>
        <h1>스피너</h1>

        <h2>
          선형 스피너 <small>Border spinner</small>
        </h2>
        <div className="mb-2">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h3>컬러</h3>
        <div className="mb-2">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {colorsCode}
          </SyntaxHighlighter>
        </div>

        <h2>
          원형 스피너 <small>Growing spinner</small>
        </h2>
        <div className="mb-2">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {growingCode}
          </SyntaxHighlighter>
        </div>

        <h3>컬러</h3>
        <div className="mb-2">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {growingColorCode}
          </SyntaxHighlighter>
        </div>

        <h2>정렬</h2>
        <h3>마진</h3>
        <div className="mb-2">
          <div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {marginCode}
          </SyntaxHighlighter>
        </div>

        <h3>플렉스</h3>
        <div className="mb-2">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {flexCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-border ml-auto"
              role="status"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {flexCode2}
          </SyntaxHighlighter>
        </div>

        <h3>Float</h3>
        <div className="mb-2">
          <div className="clearfix">
            <div className="spinner-border float-right" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {floatsCode}
          </SyntaxHighlighter>
        </div>

        <h3>Text Align</h3>
        <div className="mb-2">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {textAlignCode}
          </SyntaxHighlighter>
        </div>

        <h2>사이즈</h2>
        <div className="mb-2">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizeCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div
            className="spinner-border"
            style={{ width: '3rem', height: '3rem' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <div
            className="spinner-grow"
            style={{ width: '3rem', height: '3rem' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizeCode2}
          </SyntaxHighlighter>
        </div>

        <h2>버튼에 삽입</h2>
        <div className="mb-2">
          <button className="btn btn-primary mr-2" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
          </button>
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />{' '}
            Loading...
          </button>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {buttonsCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <button className="btn btn-primary mr-2" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
          </button>
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            />{' '}
            Loading...
          </button>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {buttonsCode2}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Spinners;
