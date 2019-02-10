import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>`;

const translucentCode = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>`;

const stackingCode = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">just now</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    See? Just like this.
  </div>
</div>

<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small class="text-muted">2 seconds ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Heads up, toasts will stack automatically
  </div>
</div>`;

const placementCode = `<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
  <div class="toast" style="position: absolute; top: 0; right: 0;">
    <div class="toast-header">
      <img src="..." class="rounded mr-2" alt="...">
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>`;

const placementCode2 = `<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
  <!-- Position it -->
  <div style="position: absolute; top: 0; right: 0;">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>`;

class Toasts extends React.Component {
  render() {
    return (
      <Layout>
        <h1>토스트</h1>
        <h2>샘플</h2>
        <div className="mb-2">
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ position: 'static', display: 'block', opacity: 1 }}
          >
            <div className="toast-header">
              <img
                src="https://placeimg.com/20/20/animals"
                className="rounded mr-2"
                alt="Animals"
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>반투명한 배경</h2>
        <div className="toast-container">
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img
                src="https://placeimg.com/20/20/animals"
                className="rounded mr-2"
                alt="Animals"
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small className="text-muted">11 mins ago</small>
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {translucentCode}
          </SyntaxHighlighter>
        </div>

        <h2>중첩</h2>
        <div className="toast-container">
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img
                src="https://placeimg.com/20/20/animals"
                className="rounded mr-2"
                alt="Animals"
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="toast-body">See? Just like this.</div>
          </div>

          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img
                src="https://placeimg.com/20/20/animals"
                className="rounded mr-2"
                alt="Animals"
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="toast-body">
              Heads up, toasts will stack automatically
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {stackingCode}
          </SyntaxHighlighter>
        </div>

        <h2>위치</h2>
        <div className="toast-container" style={{ height: '300px' }}>
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{ position: 'relative', minHeight: '200px' }}
          >
            <div
              className="toast"
              style={{ position: 'absolute', top: 0, right: 0 }}
            >
              <div className="toast-header">
                <img
                  src="https://placeimg.com/20/20/animals"
                  className="rounded mr-2"
                  alt="Animals"
                />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  className="ml-2 mb-1 close"
                  data-dismiss="toast"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {placementCode}
          </SyntaxHighlighter>
        </div>
        <div className="toast-container" style={{ height: '300px' }}>
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{ position: 'relative', minHeight: '200px' }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
              <div
                className="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <img
                    src="https://placeimg.com/20/20/animals"
                    className="rounded mr-2"
                    alt="Animals"
                  />
                  <strong className="mr-auto">Bootstrap</strong>
                  <small className="text-muted">just now</small>
                  <button
                    type="button"
                    className="ml-2 mb-1 close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="toast-body">See? Just like this.</div>
              </div>

              <div
                className="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <img
                    src="https://placeimg.com/20/20/animals"
                    className="rounded mr-2"
                    alt="Animals"
                  />
                  <strong className="mr-auto">Bootstrap</strong>
                  <small className="text-muted">2 seconds ago</small>
                  <button
                    type="button"
                    className="ml-2 mb-1 close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="toast-body">
                  Heads up, toasts will stack automatically
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {placementCode2}
          </SyntaxHighlighter>
        </div>

        <div className="toast-container" style={{ height: '300px' }}>
          <div
            aria-live="polite"
            aria-atomic="true"
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100%' }}
          >
            <div
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-header">
                <img
                  src="https://placeimg.com/20/20/animals"
                  className="rounded mr-2"
                  alt="Animals"
                />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  className="ml-2 mb-1 close"
                  data-dismiss="toast"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {placementCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Toasts;
