import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Bootstrap Crom Theme"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Bootstrap Crom Theme</h1>

    <p>
      이 테마는 신해철님이 좋아하시던 검-빨 배색을 주색으로 하는 부트스트랩
      테마입니다.
    </p>
    <p>
      부트스트랩에 대해서 잘 모르신다면{' '}
      <a
        href="https://getbootstrap.com/docs/4.2/getting-started/introduction/"
        target="_blank"
      >
        공식 문서(영문)
      </a>
      나{' '}
      <a
        href="http://bootstrap4.kr/docs/4.0/getting-started/introduction"
        target="_blank"
      >
        한글 번역 문서
      </a>
      를 읽어보십시오.
    </p>

    <hr />

    <p>이 테마는 기본 배경색을 검은색으로 하고, 텍스트를 흰 색으로 합니다.</p>
    <p className="text-primary">Primary Color는 빨간색(#cc0000)입니다.</p>
    <p className="text-danger">
      원래 빨간색으로 표시되던 Danger Color 는 보라색(#563d7c)으로 표시됩니다.
    </p>

    <hr />

    <h2>설치</h2>

    <h3>NPM을 이용한 설치</h3>

    <p>준비중입니다.</p>

    <hr/>

    <h3>직접 설치</h3>

    <p>
      <a href="https://github.com/Unk/Bootstrap-Crom-Theme" target="_blank">
        Github 페이지
      </a>
      에서 소스를{' '}
      <a
        href="https://github.com/Unk/Bootstrap-Crom-Theme/archive/master.zip"
        target="_blank"
      >
        다운로드
      </a>
      받습니다.
    </p>

    <p>
      <code>bootstrap-crom-theme.css</code> 파일을 사용할 페이지에 삽입합니다.
    </p>

    <SyntaxHighlighter language="html" style={darcula}>
      {`<link rel="stylesheet" href="your/path/bootstrap-crom-theme.css">`}
    </SyntaxHighlighter>

    <p>필요에 따라 자바스크립트를 삽입합니다.</p>

    <SyntaxHighlighter language="html" style={darcula}>
      {`<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>`}
    </SyntaxHighlighter>

  </Layout>
);

export default IndexPage;
