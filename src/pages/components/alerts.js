import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>`;

const linkColorCode = `<div class="alert alert-primary" role="alert">
  A simple primary alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
  A simple success alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
  A simple info alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
  A simple light alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert with
  <a href="#" class="alert-link">
    an example link
  </a>
  . Give it a click if you like.
</div>`;

const additionalContentsCode = `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This
    example text is going to run a bit longer so that you can see how
    spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep
    things nice and tidy.
  </p>
</div>`;

const dismissingCode = `<div
  class="alert alert-warning alert-dismissible fade show"
  role="alert"
>
  <strong>Holy guacamole!</strong> You should check in on some of
  those fields below.
  <button
    type="button"
    class="close"
    data-dismiss="alert"
    aria-label="Close"
  >
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;

export default class Alerts extends React.Component {
  render() {
    return (
      <Layout>
        <h1>
          얼럿 <small>Alerts</small>
        </h1>

        <h2>샘플</h2>

        <div>
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div className="alert alert-light" role="alert">
            A simple light alert—check it out!
          </div>
          <div className="alert alert-dark" role="alert">
            A simple dark alert—check it out!
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>링크 색상</h2>

        <div>
          <div className="alert alert-primary" role="alert">
            A simple primary alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-light" role="alert">
            A simple light alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-dark" role="alert">
            A simple dark alert with{' '}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {linkColorCode}
          </SyntaxHighlighter>
        </div>

        <h2>추가 콘텐츠</h2>

        <div>
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {additionalContentsCode}
          </SyntaxHighlighter>
        </div>

        <h2>
          닫기 기능이 있는 얼럿 <small>Dismissing</small>
        </h2>

        <div>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {dismissingCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}
