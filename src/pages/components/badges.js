import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<h1>Example heading <span class="badge badge-secondary">New</span></h1>
<h2>Example heading <span class="badge badge-secondary">New</span></h2>
<h3>Example heading <span class="badge badge-secondary">New</span></h3>
<h4>Example heading <span class="badge badge-secondary">New</span></h4>
<h5>Example heading <span class="badge badge-secondary">New</span></h5>
<h6>Example heading <span class="badge badge-secondary">New</span></h6>`;

const counterCode = `<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>`;

const profileCode = `<button type="button" class="btn btn-primary">
  Profile <span class="badge badge-light">9</span>
  <span class="sr-only">unread messages</span>
</button>`;

const contextualVariationsCode = `<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>`;

const pillBadgesCode = `<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>`;

const linksCode = `<a href="#" class="badge badge-primary">Primary</a>
<a href="#" class="badge badge-secondary">Secondary</a>
<a href="#" class="badge badge-success">Success</a>
<a href="#" class="badge badge-danger">Danger</a>
<a href="#" class="badge badge-warning">Warning</a>
<a href="#" class="badge badge-info">Info</a>
<a href="#" class="badge badge-light">Light</a>
<a href="#" class="badge badge-dark">Dark</a>`;

export default class Badges extends React.Component {
  render() {
    return (
      <Layout>
        <h1>뱃지</h1>

        <hr />

        <h2>샘플</h2>

        <div>
          <h1>
            Example heading <span className="badge badge-secondary">New</span>
          </h1>
          <h2>
            Example heading <span className="badge badge-secondary">New</span>
          </h2>
          <h3>
            Example heading <span className="badge badge-secondary">New</span>
          </h3>
          <h4>
            Example heading <span className="badge badge-secondary">New</span>
          </h4>
          <h5>
            Example heading <span className="badge badge-secondary">New</span>
          </h5>
          <h6>
            Example heading <span className="badge badge-secondary">New</span>
          </h6>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <button type="button" className="btn btn-primary">
          Notifications <span className="badge badge-light">4</span>
        </button>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {counterCode}
          </SyntaxHighlighter>
        </div>

        <button type="button" className="btn btn-primary">
          Profile <span className="badge badge-light">9</span>
          <span className="sr-only">unread messages</span>
        </button>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {profileCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>용도별 색상</h2>

        <div>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-light">Light</span>
          <span className="badge badge-dark">Dark</span>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {contextualVariationsCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>알약 모양 뱃지</h2>

        <div>
          <span className="badge badge-pill badge-primary">Primary</span>
          <span className="badge badge-pill badge-secondary">Secondary</span>
          <span className="badge badge-pill badge-success">Success</span>
          <span className="badge badge-pill badge-danger">Danger</span>
          <span className="badge badge-pill badge-warning">Warning</span>
          <span className="badge badge-pill badge-info">Info</span>
          <span className="badge badge-pill badge-light">Light</span>
          <span className="badge badge-pill badge-dark">Dark</span>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {pillBadgesCode}
          </SyntaxHighlighter>
        </div>

        <hr />

        <h2>링크형태로 사용</h2>

        <div>
          <a href="#" className="badge badge-primary">
            Primary
          </a>
          <a href="#" className="badge badge-secondary">
            Secondary
          </a>
          <a href="#" className="badge badge-success">
            Success
          </a>
          <a href="#" className="badge badge-danger">
            Danger
          </a>
          <a href="#" className="badge badge-warning">
            Warning
          </a>
          <a href="#" className="badge badge-info">
            Info
          </a>
          <a href="#" className="badge badge-light">
            Light
          </a>
          <a href="#" className="badge badge-dark">
            Dark
          </a>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {linksCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}
