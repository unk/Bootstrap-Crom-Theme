import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'bootstrap';

import Header from './header';
import '../styles/layout.css';
import '../styles/bootstrap-crom-theme.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="row mx-0">
          <div className="col-md-2 d-none d-md-block">
            <div className="p-3">
              <h6>컴포넌트</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to={'/components/alerts'}>
                    <a className="text-white">
                      얼럿 <small>Alerts</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/badges'}>
                    <a className="text-white">
                      뱃지 <small>Badges</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/breadcrumb'}>
                    <a className="text-white">
                      방문 기록 <small>Breadcrumb</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/buttons'}>
                    <a className="text-white">
                      버튼 <small>Buttons</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/button-group'}>
                    <a className="text-white">
                      버튼 그룹 <small>Button Group</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/cards'}>
                    <a className="text-white">
                      카드 <small>Cards</small>
                    </a>
                  </Link>
                </li>
                {/*<li>*/}
                {/*<Link to={'/components/carousel'}>*/}
                {/*<a className="text-white">*/}
                {/*캐러셀 <small>Carousel</small>*/}
                {/*</a>*/}
                {/*</Link>*/}
                {/*</li>*/}
                <li>
                  <Link to={'/components/collapse'}>
                    <a className="text-white">
                      열기/닫기 <small>Collapse</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/dropdowns'}>
                    <a className="text-white">
                      드롭다운 <small>Dropdowns</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/forms'}>
                    <a className="text-white">
                      폼 <small>Forms</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/input-group'}>
                    <a className="text-white">
                      인풋 그룹 <small>Input Group</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/jumbotron'}>
                    <a className="text-white">
                      점보트론 <small>Jumbotron</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/list-group'}>
                    <a className="text-white">
                      리스트 그룹 <small>List Group</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/media-object'}>
                    <a className="text-white">
                      미디어 <small>Media Object</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/modal'}>
                    <a className="text-white">
                      모달 <small>Modal</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/navs'}>
                    <a className="text-white">
                      네비게이션 <small>Navs</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/navbar'}>
                    <a className="text-white">
                      네비게이션 바 <small>Navbar</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/pagination'}>
                    <a className="text-white">
                      페이지네이션 <small>Pagination</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/popovers'}>
                    <a className="text-white">
                      팝오버 <small>Popovers</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/progress'}>
                    <a className="text-white">
                      진행률 <small>Progress</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/scrollspy'}>
                    <a className="text-white">
                      스크롤감지 <small>Scrollspy</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/spinners'}>
                    <a className="text-white">
                      스피너 <small>Spinners</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/toasts'}>
                    <a className="text-white">
                      토스트 <small>Toasts</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/tooltips'}>
                    <a className="text-white">
                      툴팁 <small>Tooltips</small>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <div className="p-3">
              {children}
            </div>
            <footer>
              © {new Date().getFullYear()}
              {` `}
              <a
                href="https://unk.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Naram Kim a.k.a. Unknown
              </a>
            </footer>
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
