import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>`;

class Carousel extends React.Component {
  render() {
    return (
      <Layout>
        <div className="mb-2">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://placeimg.com/640/240/animals"
                  className="card-img-top"
                  alt="animals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://placeimg.com/640/240/animals"
                  className="card-img-top"
                  alt="animals"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://placeimg.com/640/240/animals"
                  className="card-img-top"
                  alt="animals"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Carousel;
