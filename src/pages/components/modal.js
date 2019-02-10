import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

const liveDemoCode = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

const longContentCode = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

const verticallyCenteredCode = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

const tooltipsAndPopoversCode = `<div class="modal-body">
  <h5>Popover in a modal</h5>
  <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
  <hr>
  <h5>Tooltips in a modal</h5>
  <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>`;

const gridCode = `<div class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
      <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

const varyingModalContentCode = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>`;

const optionalSizeCode = `<!-- Extra large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>

<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>`;

class Modal extends React.Component {
  render() {
    return (
      <Layout>
        <h1>모달</h1>

        <h2>샘플</h2>
        <div className="mb-2">
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            style={{ display: 'block', position: 'static' }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>라이브 데모</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  aliquid dolorem dolorum ea esse, fuga illum in, iusto laborum
                  perferendis perspiciatis placeat possimus quas quis quo quod
                  saepe voluptatibus voluptatum?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {liveDemoCode}
          </SyntaxHighlighter>
        </div>

        <h2>내용이 긴 경우</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores aspernatur eaque iure perferendis saepe
                    sunt. A alias consequuntur debitis distinctio illo
                    necessitatibus nihil repudiandae, sed, sit totam ut
                    voluptate.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {longContentCode}
          </SyntaxHighlighter>
        </div>

        <h2>중앙 정렬</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, quaerat quidem. Architecto beatae consequatur cum
                  deleniti ducimus ea error explicabo facere facilis quibusdam
                  quidem recusandae, sequi. Debitis eveniet incidunt
                  repellendus!
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {verticallyCenteredCode}
          </SyntaxHighlighter>
        </div>

        <h2>툴팁과 팝오버</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#tooltipsAndPopoversModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="tooltipsAndPopoversModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h5>Popover in a modal</h5>
                  <p>
                    This{' '}
                    <a
                      href="#"
                      onClick={() => false}
                      role="button"
                      className="btn btn-secondary popover-test"
                      title="Popover title"
                      data-content="Popover body content is set in this attribute."
                    >
                      button
                    </a>{' '}
                    triggers a popover on click.
                  </p>
                  <hr />
                  <h5>Tooltips in a modal</h5>
                  <p>
                    <a href="#" className="tooltip-test" title="Tooltip">
                      This link
                    </a>{' '}
                    and{' '}
                    <a href="#" className="tooltip-test" title="Tooltip">
                      that link
                    </a>{' '}
                    have tooltips on hover.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {tooltipsAndPopoversCode}
          </SyntaxHighlighter>
        </div>

        <h2>그리드 사용</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#gridModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="gridModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">.col-md-4</div>
                      <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                      <div className="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9">
                        Level 1: .col-sm-9
                        <div className="row">
                          <div className="col-8 col-sm-6">
                            Level 2: .col-8 .col-sm-6
                          </div>
                          <div className="col-4 col-sm-6">
                            Level 2: .col-4 .col-sm-6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {gridCode}
          </SyntaxHighlighter>
        </div>

        <h2>모달 컨텐츠</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#varyingModal"
            data-whatever="@mdo"
          >
            Open modal for @mdo
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#varyingModal"
            data-whatever="@fat"
          >
            Open modal for @fat
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#varyingModal"
            data-whatever="@getbootstrap"
          >
            Open modal for @getbootstrap
          </button>

          <div
            className="modal fade"
            id="varyingModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    New message
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Recipient:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message-text" className="col-form-label">
                        Message:
                      </label>
                      <textarea className="form-control" id="message-text" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {varyingModalContentCode}
          </SyntaxHighlighter>
        </div>

        <h2>사이즈</h2>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target=".bd-example-modal-xl"
          >
            Extra large modal
          </button>

          <div
            className="modal fade bd-example-modal-xl"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium aut blanditiis cumque debitis dolor dolores
                  dolorum, eligendi eos error impedit iure neque quaerat
                  repellat repudiandae sint tempore tenetur voluptates,
                  voluptatum!
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Large modal
          </button>

          <div
            className="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus eaque enim error laboriosam molestiae nostrum,
                  officiis pariatur quidem recusandae? Amet autem cum provident
                  quae sit vitae? Animi maxime sequi tempore.
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target=".bd-example-modal-sm"
          >
            Small modal
          </button>

          <div
            className="modal fade bd-example-modal-sm"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  architecto asperiores corporis earum esse et iure laboriosam
                  minima natus numquam odio officiis omnis qui repellendus
                  sapiente soluta, tempora ut voluptatem.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {optionalSizeCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Modal;
