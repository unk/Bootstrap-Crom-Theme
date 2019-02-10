import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`;

const exampleWithACode = `<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`;

const colorVariationCode = `<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>`;

const splitButtonCode = `<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>`;

const sizingCode = `<!-- Large button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Large button
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Large split button
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>

<!-- Small button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Small button
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Small split button
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>`;

const dropUpCode = `<!-- Default dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropup
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>`;

const dropRightCode = `<!-- Default dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropright
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary">
    Split dropright
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropright</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>`;

const dropLeftCode = `<!-- Default dropleft button -->
<div class="btn-group dropleft">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropleft
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropleft button -->
<div class="btn-group">
  <div class="btn-group dropleft" role="group">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropleft</span>
    </button>
    <div class="dropdown-menu">
      <!-- Dropdown menu links -->
    </div>
  </div>
  <button type="button" class="btn btn-secondary">
    Split dropleft
  </button>
</div>`;

const menuItemsCode = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>`;

const staticCode = `<div class="dropdown-menu">
  <span class="dropdown-item-text">Dropdown item text</span>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>`;

const activeCode = `<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>`;

const disabledCode = `<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>`;

const menuAlignCode = `<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned menu
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>`;

const responsiveLeftAlignCode = `<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <div class="dropdown-menu dropdown-menu-lg-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>`;

const responsiveRightAlignCode = `<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <div class="dropdown-menu dropdown-menu-lg-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>`;

const menuHeaderCode = `<div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
</div>`;

const dividerCode = `<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Separated link</a>
</div>`;

const textCode = `<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>`;

const formCode = `<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="form-group">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>`;

const formWithoutFooterCode = `<form class="dropdown-menu p-4">
  <div class="form-group">
    <label for="exampleDropdownFormEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
  </div>
  <div class="form-group">
    <label for="exampleDropdownFormPassword2">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
  </div>
  <div class="form-group">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck2">
      <label class="form-check-label" for="dropdownCheck2">
        Remember me
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>`;

const optionCode = `<div class="d-flex">
  <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Offset
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>`;

class Dropdowns extends React.Component {
  render() {
    return (
      <Layout>
        <div className="mb-2">
          <h2>샘플</h2>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleWithACode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Action
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {colorVariationCode}
          </SyntaxHighlighter>
        </div>

        <h2>버튼 분리형</h2>
        <div className="mb-2">
          <div class="btn-group">
            <button type="button" class="btn btn-danger">
              Action
            </button>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {splitButtonCode}
          </SyntaxHighlighter>
        </div>

        <h2>사이즈</h2>
        <div className="mb-2">
          <div className="mb-2">
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-lg dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Large button
              </button>
              <div class="dropdown-menu">...</div>
            </div>
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg" type="button">
                Large split button
              </button>
              <button
                type="button"
                class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">...</div>
            </div>
          </div>

          <div class="btn-group">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Small button
            </button>
            <div class="dropdown-menu">...</div>
          </div>
          <div class="btn-group">
            <button class="btn btn-secondary btn-sm" type="button">
              Small split button
            </button>
            <button
              type="button"
              class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">...</div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {sizingCode}
          </SyntaxHighlighter>
        </div>

        <h2>방향</h2>
        <div className="mb-2">
          <div class="btn-group dropup">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropup
            </button>
            <div class="dropdown-menu" />
          </div>

          <div class="btn-group dropup">
            <button type="button" class="btn btn-secondary">
              Split dropup
            </button>
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu" />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {dropUpCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div class="btn-group dropright">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropright
            </button>
            <div class="dropdown-menu" />
          </div>

          <div class="btn-group dropright">
            <button type="button" class="btn btn-secondary">
              Split dropright
            </button>
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropright</span>
            </button>
            <div class="dropdown-menu" />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {dropRightCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div class="btn-group dropleft">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropleft
            </button>
            <div class="dropdown-menu" />
          </div>

          <div class="btn-group">
            <div class="btn-group dropleft" role="group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle Dropleft</span>
              </button>
              <div class="dropdown-menu" />
            </div>
            <button type="button" class="btn btn-secondary">
              Split dropleft
            </button>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {dropLeftCode}
          </SyntaxHighlighter>
        </div>

        <h2>메뉴 아이템</h2>
        <div className="mb-2">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {menuItemsCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {menuItemsCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div className="dropdown-menu">
            <span className="dropdown-item-text">Dropdown item text</span>
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {staticCode}
          </SyntaxHighlighter>
        </div>

        <h2>활성 상태 표현</h2>
        <div className="mb-2">
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Regular link
            </a>
            <a className="dropdown-item active" href="#">
              Active link
            </a>
            <a className="dropdown-item" href="#">
              Another link
            </a>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {activeCode}
          </SyntaxHighlighter>
        </div>

        <h2>비활성 상태 표현</h2>
        <div className="mb-2">
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Regular link
            </a>
            <a
              className="dropdown-item disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled link
            </a>
            <a className="dropdown-item" href="#">
              Another link
            </a>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {disabledCode}
          </SyntaxHighlighter>
        </div>

        <h2>메뉴 정렬</h2>
        <div className="mb-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Right-aligned menu
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {menuAlignCode}
          </SyntaxHighlighter>
        </div>

        <h2>반응형 대응 정렬</h2>
        <div className="mb-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              data-display="static"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Left-aligned but right aligned when large screen
            </button>
            <div className="dropdown-menu dropdown-menu-lg-right">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {responsiveLeftAlignCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              data-display="static"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Right-aligned but left aligned when large screen
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {responsiveRightAlignCode}
          </SyntaxHighlighter>
        </div>

        <h2>메뉴 컨텐트</h2>
        <h3>헤더</h3>
        <div className="mb-2">
          <div className="row">
            <div className="col">
              <div
                className="dropdown-menu"
                style={{ position: 'static', display: 'block' }}
              >
                <h6 className="dropdown-header">Dropdown header</h6>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {menuHeaderCode}
          </SyntaxHighlighter>
        </div>

        <h3>구분선</h3>
        <div className="mb-2">
          <div className="row">
            <div className="col">
              <div
                className="dropdown-menu"
                style={{ position: 'static', display: 'block' }}
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {dividerCode}
          </SyntaxHighlighter>
        </div>

        <h3>텍스트</h3>
        <div className="mb-2">
          <div className="row">
            <div className="col">
              <div
                className="dropdown-menu p-4 text-muted"
                style={{
                  position: 'static',
                  display: 'block',
                  maxWidth: '200px'
                }}
              >
                <p>
                  Some example text that's free-flowing within the dropdown
                  menu.
                </p>
                <p className="mb-0">And this is more example text.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {textCode}
          </SyntaxHighlighter>
        </div>

        <h2>폼</h2>
        <div className="mb-2">
          <div className="row">
            <div className="col">
              <div
                className="dropdown-menu"
                style={{ position: 'static', display: 'block' }}
              >
                <form className="px-4 py-3">
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleDropdownFormEmail1"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleDropdownFormPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="dropdownCheck"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  New around here? Sign up
                </a>
                <a className="dropdown-item" href="#">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {formCode}
          </SyntaxHighlighter>
        </div>

        <div className="mb-2">
          <div className="row">
            <div className="col">
              <form
                className="dropdown-menu p-4"
                style={{ position: 'static', display: 'block' }}
              >
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormEmail2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleDropdownFormEmail2"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormPassword2">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleDropdownFormPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="dropdownCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {formWithoutFooterCode}
          </SyntaxHighlighter>
        </div>

        <h2>드롭다운 옵션</h2>
        <div className="mb-2">
          <div className="d-flex">
            <div className="dropdown mr-1">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="10,20"
              >
                Offset
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuOffset"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-secondary">
                Reference
              </button>
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                id="dropdownMenuReference"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-reference="parent"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuReference"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {optionCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Dropdowns;
