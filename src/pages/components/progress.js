import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

const exampleCode2 = `<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

const labelsCode = `<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>`;

const heightCode = `<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

const backgroundsCode = `<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

const multipleBarsCode = `<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

const stripedCode = `<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>`;

const animatedStripesCode = `<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>`;

class Progress extends React.Component {
  render() {
    return (
      <Layout>
        <h1>진행률</h1>

        <h2>샘플</h2>
        <div className="mb-2">
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '50%' }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '75%' }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '100%' }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode2}
          </SyntaxHighlighter>
        </div>

        <h2>라벨</h2>
        <div className="mb-2">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {labelsCode}
          </SyntaxHighlighter>
        </div>

        <h2>높이 지정</h2>
        <div className="mb-2">
          <div className="progress" style={{ height: '1px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress" style={{ height: '20px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {heightCode}
          </SyntaxHighlighter>
        </div>

        <h2>배경</h2>
        <div className="mb-2">
          <div className="progress mb-2">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: '50%' }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: '75%' }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: '100%' }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {backgroundsCode}
          </SyntaxHighlighter>
        </div>

        <h2>다중 바</h2>
        <div className="mb-2">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '15%' }}
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '30%' }}
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            />
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: '20%' }}
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {multipleBarsCode}
          </SyntaxHighlighter>
        </div>

        <h2>스트라이프 패턴</h2>
        <div className="mb-2">
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: '10%' }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-info"
              role="progressbar"
              style={{ width: '50%' }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-warning"
              role="progressbar"
              style={{ width: '75%' }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style={{ width: '100%' }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {stripedCode}
          </SyntaxHighlighter>
        </div>

        <h2>애니메이션</h2>
        <div className="mb-2">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: '75%' }}
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {animatedStripesCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Progress;
