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
      이 테마는 신해철님을 추억하는 목적으로 만들어진 부트스트랩 다크테마입니다.<br/>
      검-빨 배색은 신해철님이 좋아하시던 배색이고, 강렬한 느낌의 다크 테마에도 아주 적합한 배색입니다.<br/>
      추억하고 추모하는 목적 외에도 실용성 있는 수준의 다크 테마를 제작하고자 했습니다.
    </p>
    <p>
      부트스트랩에 대해서 잘 모르신다면{' '}
      <a
        href="https://getbootstrap.com/docs/4.2/getting-started/introduction/"
        target="_blank"
        rel="noopener noreferrer"
      >
        공식 문서(영문)
      </a>
      나{' '}
      <a
        href="http://bootstrap4.kr/docs/4.0/getting-started/introduction"
        target="_blank"
        rel="noopener noreferrer"
      >
        한글 번역 문서
      </a>
      를 읽어보십시오.
    </p>

    <hr />

    <p>이 테마는 기본 배경색을 검은색으로 하고, 텍스트를 흰색으로 합니다.</p>
    <p className="text-primary">Primary Color는 빨간색(#cc0000)입니다.</p>
    <p className="text-danger">
      원래 빨간색으로 표시되던 Danger Color 는 보라색(#563d7c)으로 표시됩니다.
    </p>

    <hr />

    <h2>설치</h2>

    <h3>NPM을 이용한 설치</h3>

    <p>터미널을 통해 설치합니다.</p>

    <SyntaxHighlighter language="bash" style={darcula}>
      {`npm install --save bootstrap-crom-theme
# or
yarn add bootstrap-crom-theme`}
    </SyntaxHighlighter>

    <p>그리고 로드 합니다.</p>

    <SyntaxHighlighter language="javascript" style={darcula}>
      {`require( 'node_modules/bootstrap-crom-theme/bootstrap-crom-theme.css' );
// or
import 'node_modules/bootstrap-crom-theme/bootstrap-crom-theme.css';`}
    </SyntaxHighlighter>

    <hr/>

    <h3>직접 설치</h3>

    <p>
      <a href="https://github.com/Unk/Bootstrap-Crom-Theme" target="_blank" rel="noopener noreferrer">
        Github 페이지
      </a>
      에서 소스를{' '}
      <a
        href="https://github.com/Unk/Bootstrap-Crom-Theme/archive/master.zip"
        target="_blank"
        rel="noopener noreferrer"
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

    <h2>버그 및 제안</h2>

    <p>
      <a href="https://github.com/Unk/Bootstrap-Crom-Theme/issues" target="_blank">https://github.com/Unk/Bootstrap-Crom-Theme/issues</a>
    </p>

    <h2>참여방법</h2>

    <p>
      많은 분들의 참여로 함께 만들어나가는 테마가 되면 좋겠습니다.<br/>
      풀 리퀘스트 주시거나 제게 메일 주세요 <a href="mailto:unknown@grotesq.com">unknown@grotesq.com</a>
    </p>

    <h2>라이센스</h2>

    <p>
      불새 로고에 대한 이미지는 전상일님에게 있습니다.<br/>
      신해철님에 대한 추모 목적의 비상업적 용도 외의 상업적 사용은 불가합니다.<br/>
      사용권에 대한 자세한 내용은 전상일님에게 문의하셔야합니다.
    </p>

    <p>
      그 외의 모든 소스는 MIT 라이센스를 따릅니다.
      상세 정보: <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License (영문)</a> <a href="https://www.olis.or.kr/license/Detailselect.do?lId=1006" target="_blank">[MIT 라이센스 (한글)]</a>
    </p>

  </Layout>
);

export default IndexPage;
