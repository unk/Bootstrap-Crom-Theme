import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#cc0000`
    }}
  >
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
          Bootstrap Crom Theme
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'}>
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                컴포넌트
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={'/components/alerts'}>
                  <a className="dropdown-item">
                    얼럿 <small>Alerts</small>
                  </a>
                </Link>
                <Link to={'/components/badges'}>
                  <a className="dropdown-item">
                    뱃지 <small>Badges</small>
                  </a>
                </Link>
                <Link to={'/components/breadcrumb'}>
                  <a className="dropdown-item">
                    방문 기록 <small>Breadcrumb</small>
                  </a>
                </Link>
                <Link to={'/components/buttons'}>
                  <a className="dropdown-item">
                    버튼 <small>Buttons</small>
                  </a>
                </Link>
                <Link to={'/components/button-group'}>
                  <a className="dropdown-item">
                    버튼 그룹 <small>Button Group</small>
                  </a>
                </Link>
                <Link to={'/components/cards'}>
                  <a className="dropdown-item">
                    카드 <small>Cards</small>
                  </a>
                </Link>
                {/*<Link to={'/components/carousel'}>*/}
                  {/*<a className="dropdown-item">*/}
                    {/*캐러셀 <small>Carousel</small>*/}
                  {/*</a>*/}
                {/*</Link>*/}
                <Link to={'/components/collapse'}>
                  <a className="dropdown-item">
                    열기/닫기 <small>Collapse</small>
                  </a>
                </Link>
                <Link to={'/components/dropdowns'}>
                  <a className="dropdown-item">
                    드롭다운 <small>Dropdowns</small>
                  </a>
                </Link>
                <Link to={'/components/forms'}>
                  <a className="dropdown-item">
                    폼 <small>Forms</small>
                  </a>
                </Link>
                <Link to={'/components/input-group'}>
                  <a className="dropdown-item">
                    인풋 그룹 <small>Input Group</small>
                  </a>
                </Link>
                <Link to={'/components/jumbotron'}>
                  <a className="dropdown-item">
                    점보트론 <small>Jumbotron</small>
                  </a>
                </Link>
                <Link to={'/components/list-group'}>
                  <a className="dropdown-item">
                    리스트 그룹 <small>List Group</small>
                  </a>
                </Link>
                <Link to={'/components/media-object'}>
                  <a className="dropdown-item">
                    미디어 <small>Media Object</small>
                  </a>
                </Link>
                <Link to={'/components/modal'}>
                  <a className="dropdown-item">
                    모달 <small>Modal</small>
                  </a>
                </Link>
                <Link to={'/components/navs'}>
                  <a className="dropdown-item">
                    네비게이션 <small>Navs</small>
                  </a>
                </Link>
                <Link to={'/components/navbar'}>
                  <a className="dropdown-item">
                    네비게이션 바 <small>Navbar</small>
                  </a>
                </Link>
                <Link to={'/components/pagination'}>
                  <a className="dropdown-item">
                    페이지네이션 <small>Pagination</small>
                  </a>
                </Link>
                <Link to={'/components/popovers'}>
                  <a className="dropdown-item">
                    팝오버 <small>Popovers</small>
                  </a>
                </Link>
                <Link to={'/components/progress'}>
                  <a className="dropdown-item">
                    진행률 <small>Progress</small>
                  </a>
                </Link>
                <Link to={'/components/scrollspy'}>
                  <a className="dropdown-item">
                    스크롤감지 <small>Scrollspy</small>
                  </a>
                </Link>
                <Link to={'/components/spinners'}>
                  <a className="dropdown-item">
                    스피너 <small>Spinners</small>
                  </a>
                </Link>
                <Link to={'/components/toasts'}>
                  <a className="dropdown-item">
                    토스트 <small>Toasts</small>
                  </a>
                </Link>
                <Link to={'/components/tooltips'}>
                  <a className="dropdown-item">
                    툴팁 <small>Tooltips</small>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
