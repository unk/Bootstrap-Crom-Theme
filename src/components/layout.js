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
                  <Link to={'/components/alerts'} className="text-white">
                    얼럿 <small>Alerts</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/badges'} className="text-white">
                    뱃지 <small>Badges</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/breadcrumb'} className="text-white">
                    방문 기록 <small>Breadcrumb</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/buttons'} className="text-white">
                    버튼 <small>Buttons</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/button-group'} className="text-white">
                    버튼 그룹 <small>Button Group</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/cards'} className="text-white">
                    카드 <small>Cards</small>
                  </Link>
                </li>
                {/*<li>*/}
                {/*<Link to={'/components/carousel'} className="text-white">*/}
                {/*캐러셀 <small>Carousel</small>*/}
                {/*</Link>*/}
                {/*</li>*/}
                <li>
                  <Link to={'/components/collapse'} className="text-white">
                    열기/닫기 <small>Collapse</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/dropdowns'} className="text-white">
                    드롭다운 <small>Dropdowns</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/forms'} className="text-white">
                    폼 <small>Forms</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/input-group'} className="text-white">
                    인풋 그룹 <small>Input Group</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/jumbotron'} className="text-white">
                    점보트론 <small>Jumbotron</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/list-group'} className="text-white">
                    리스트 그룹 <small>List Group</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/media-object'} className="text-white">
                    미디어 <small>Media Object</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/modal'} className="text-white">
                    모달 <small>Modal</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/navs'} className="text-white">
                    네비게이션 <small>Navs</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/navbar'} className="text-white">
                    네비게이션 바 <small>Navbar</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/pagination'} className="text-white">
                    페이지네이션 <small>Pagination</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/popovers'} className="text-white">
                    팝오버 <small>Popovers</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/progress'} className="text-white">
                    진행률 <small>Progress</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/scrollspy'} className="text-white">
                    스크롤감지 <small>Scrollspy</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/spinners'} className="text-white">
                    스피너 <small>Spinners</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/toasts'} className="text-white">
                    토스트 <small>Toasts</small>
                  </Link>
                </li>
                <li>
                  <Link to={'/components/tooltips'} className="text-white">
                    툴팁 <small>Tooltips</small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <div className="p-3">{children}</div>
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
