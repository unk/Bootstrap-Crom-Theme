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
                <a className="nav-link">Home</a>
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
                <Link to={'/components/alerts'} className="dropdown-item">
                  얼럿 <small>Alerts</small>
                </Link>
                <Link to={'/components/badges'} className="dropdown-item">
                  뱃지 <small>Badges</small>
                </Link>
                <Link to={'/components/breadcrumb'} className="dropdown-item">
                  방문 기록 <small>Breadcrumb</small>
                </Link>
                <Link to={'/components/buttons'} className="dropdown-item">
                  버튼 <small>Buttons</small>
                </Link>
                <Link to={'/components/button-group'} className="dropdown-item">
                  버튼 그룹 <small>Button Group</small>
                </Link>
                <Link to={'/components/cards'} className="dropdown-item">
                  카드 <small>Cards</small>
                </Link>
                {/*<Link to={'/components/carousel'} className="dropdown-item">*/}
                {/*캐러셀 <small>Carousel</small>*/}
                {/*</Link>*/}
                <Link to={'/components/collapse'} className="dropdown-item">
                  열기/닫기 <small>Collapse</small>
                </Link>
                <Link to={'/components/dropdowns'} className="dropdown-item">
                  드롭다운 <small>Dropdowns</small>
                </Link>
                <Link to={'/components/forms'} className="dropdown-item">
                  폼 <small>Forms</small>
                </Link>
                <Link to={'/components/input-group'} className="dropdown-item">
                  인풋 그룹 <small>Input Group</small>
                </Link>
                <Link to={'/components/jumbotron'} className="dropdown-item">
                  점보트론 <small>Jumbotron</small>
                </Link>
                <Link to={'/components/list-group'} className="dropdown-item">
                  리스트 그룹 <small>List Group</small>
                </Link>
                <Link to={'/components/media-object'} className="dropdown-item">
                  미디어 <small>Media Object</small>
                </Link>
                <Link to={'/components/modal'} className="dropdown-item">
                  모달 <small>Modal</small>
                </Link>
                <Link to={'/components/navs'} className="dropdown-item">
                  네비게이션 <small>Navs</small>
                </Link>
                <Link to={'/components/navbar'} className="dropdown-item">
                  네비게이션 바 <small>Navbar</small>
                </Link>
                <Link to={'/components/pagination'} className="dropdown-item">
                  페이지네이션 <small>Pagination</small>
                </Link>
                <Link to={'/components/popovers'} className="dropdown-item">
                  팝오버 <small>Popovers</small>
                </Link>
                <Link to={'/components/progress'} className="dropdown-item">
                  진행률 <small>Progress</small>
                </Link>
                <Link to={'/components/scrollspy'} className="dropdown-item">
                  스크롤감지 <small>Scrollspy</small>
                </Link>
                <Link to={'/components/spinners'} className="dropdown-item">
                  스피너 <small>Spinners</small>
                </Link>
                <Link to={'/components/toasts'} className="dropdown-item">
                  토스트 <small>Toasts</small>
                </Link>
                <Link to={'/components/tooltips'} className="dropdown-item">
                  툴팁 <small>Tooltips</small>
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
