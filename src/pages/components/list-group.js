import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`;

const activeItemsCode = `<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`;

const disabledCode = `<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`;

const linksAndButtonsCode = `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div>`;

const disabledAttrCode = `<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div>`;

const flushCode = `<ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`;

const contextualClassCode = `<ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>

  
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>`;

const listGroupItemActionCode = `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

  
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
</div>`;

const withBadgesCode = `<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>`;

const customContentCode = `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
</div>`;

const jsBehaviorCode = `<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>`;

const dataAttrCode = `<!-- List group -->
  <div class="list-group" id="myList" role="tablist">
    <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">Home</a>
    <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Profile</a>
    <a class="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Messages</a>
    <a class="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Settings</a>
  </div>

  <!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
<div class="tab-pane" id="profile" role="tabpanel">...</div>
<div class="tab-pane" id="messages" role="tabpanel">...</div>
<div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>`;

const fadeEffectCode = `<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">...</div>
</div>`;

class ListGroup extends React.Component {
  render() {
    return (
      <Layout>
        <h2>샘플</h2>
        <div className="mb-2">
          <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>활성화 된 아이템 표시</h2>
        <div className="mb-2">
          <ul className="list-group">
            <li className="list-group-item active">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {activeItemsCode}
          </SyntaxHighlighter>
        </div>

        <h2>비활성화 된 아이템 표시</h2>
        <div className="mb-2">
          <ul className="list-group">
            <li className="list-group-item disabled" aria-disabled="true">
              Cras justo odio
            </li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledCode}
          </SyntaxHighlighter>
        </div>

        <h2>링크와 버튼</h2>
        <div className="mb-2">
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
            >
              Cras justo odio
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Dapibus ac facilisis in
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Morbi leo risus
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Porta ac consectetur ac
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action disabled"
              tabIndex="-1"
              aria-disabled="true"
            >
              Vestibulum at eros
            </a>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action active"
            >
              Cras justo odio
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Dapibus ac facilisis in
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Morbi leo risus
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Porta ac consectetur ac
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              disabled
            >
              Vestibulum at eros
            </button>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledAttrCode}
          </SyntaxHighlighter>
        </div>

        <h2>Flush</h2>
        <div className="mb-2">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {flushCode}
          </SyntaxHighlighter>
        </div>

        <h2>용도별 클래스</h2>
        <div className="mb-2">
          <ul className="list-group">
            <li className="list-group-item">Dapibus ac facilisis in</li>

            <li className="list-group-item list-group-item-primary">
              A simple primary list group item
            </li>
            <li className="list-group-item list-group-item-secondary">
              A simple secondary list group item
            </li>
            <li className="list-group-item list-group-item-success">
              A simple success list group item
            </li>
            <li className="list-group-item list-group-item-danger">
              A simple danger list group item
            </li>
            <li className="list-group-item list-group-item-warning">
              A simple warning list group item
            </li>
            <li className="list-group-item list-group-item-info">
              A simple info list group item
            </li>
            <li className="list-group-item list-group-item-light">
              A simple light list group item
            </li>
            <li className="list-group-item list-group-item-dark">
              A simple dark list group item
            </li>
          </ul>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {contextualClassCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              Dapibus ac facilisis in
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              A simple primary list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-secondary"
            >
              A simple secondary list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              A simple success list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              A simple danger list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              A simple warning list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              A simple info list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light"
            >
              A simple light list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-dark"
            >
              A simple dark list group item
            </a>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {listGroupItemActionCode}
          </SyntaxHighlighter>
        </div>

        <h2>뱃지 표시</h2>
        <div className="mb-2">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span className="badge badge-primary badge-pill">1</span>
            </li>
          </ul>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {withBadgesCode}
          </SyntaxHighlighter>
        </div>

        <h2>커스텀 컨텐트</h2>
        <div className="mb-2">
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {customContentCode}
          </SyntaxHighlighter>
        </div>

        <h2>자바스크립트 동작 추가</h2>
        <div className="mb-2">
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  Home
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Profile
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Messages
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                >
                  Settings
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div
                  className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  Ab accusantium asperiores cupiditate facere,
                </div>
                <div
                  className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  fugit id illo inventore ipsam ipsum laudantium nesciunt nihil,
                </div>
                <div
                  className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  numquam odio pariatur reprehenderit saepe sint, sunt. Alias.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {jsBehaviorCode}
          </SyntaxHighlighter>
        </div>

        <h3>data 속성으로 제어하기</h3>
        <div className="mb-2">
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="myList" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  href="#my-list-home"
                  role="tab"
                >
                  Home
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#my-list-profile"
                  role="tab"
                >
                  Profile
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#my-list-messages"
                  role="tab"
                >
                  Messages
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#my-list-settings"
                  role="tab"
                >
                  Settings
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="my-list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div
                  className="tab-pane fade"
                  id="my-list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  Ab accusantium asperiores cupiditate facere,
                </div>
                <div
                  className="tab-pane fade"
                  id="my-list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  fugit id illo inventore ipsam ipsum laudantium nesciunt nihil,
                </div>
                <div
                  className="tab-pane fade"
                  id="my-list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  numquam odio pariatur reprehenderit saepe sint, sunt. Alias.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {dataAttrCode}
          </SyntaxHighlighter>
        </div>

        <h3>페이드 효과</h3>
        <div className="mb-2">
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="myList2" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  href="#fade-home"
                  role="tab"
                >
                  Home
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#fade-profile"
                  role="tab"
                >
                  Profile
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#fade-messages"
                  role="tab"
                >
                  Messages
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#fade-settings"
                  role="tab"
                >
                  Settings
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="fade-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div
                  className="tab-pane fade"
                  id="fade-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  Ab accusantium asperiores cupiditate facere,
                </div>
                <div
                  className="tab-pane fade"
                  id="fade-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  fugit id illo inventore ipsam ipsum laudantium nesciunt nihil,
                </div>
                <div
                  className="tab-pane fade"
                  id="fade-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  numquam odio pariatur reprehenderit saepe sint, sunt. Alias.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {fadeEffectCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default ListGroup;
