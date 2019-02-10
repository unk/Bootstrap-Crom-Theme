import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<div class="media">
  <img src="..." class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>`;

const nestingCode = `<div class="media">
  <img src="..." class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    <div class="media mt-3">
      <a class="mr-3" href="#">
        <img src="..." class="mr-3" alt="...">
      </a>
      <div class="media-body">
        <h5 class="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>`;

const alignCode = `<div class="media">
  <img src="..." class="align-self-start mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Top-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>`;

const centerAlignedCode = `<div class="media">
  <img src="..." class="align-self-center mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Center-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>`;

const bottomAlignedCode = `<div class="media">
  <img src="..." class="align-self-end mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Bottom-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>`;

const orderCode = `<div class="media">
  <div class="media-body">
    <h5 class="mt-0 mb-1">Media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img src="..." class="ml-3" alt="...">
</div>`;

const mediaListCode = `<ul class="list-unstyled">
  <li class="media">
    <img src="..." class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media my-4">
    <img src="..." class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img src="..." class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">List-based media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
</ul>`;

class MediaObject extends React.Component {
  render() {
    return (
      <Layout>
        <h1>미디어</h1>

        <h2>샘플</h2>
        <div className="mb-2">
          <div className="media">
            <img
              src="https://placeimg.com/64/64/animals"
              className="mr-3"
              alt="Animal"
            />
            <div className="media-body">
              <h5 className="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>중첩</h2>
        <div className="mb-2">
          <div className="media">
            <img
              src="https://placeimg.com/64/64/animals"
              className="mr-3"
              alt="Animal"
            />
            <div className="media-body">
              <h5 className="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <div className="media mt-3">
                <a className="mr-3" href="#">
                  <img
                    src="https://placeimg.com/64/64/animals"
                    className="mr-3"
                    alt="Animal"
                  />
                </a>
                <div className="media-body">
                  <h5 className="mt-0">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {nestingCode}
          </SyntaxHighlighter>
        </div>

        <h2>정렬</h2>
        <div className="mb-2">
          <div className="media">
            <img
              src="https://placeimg.com/64/64/animals"
              className="mr-3"
              alt="Animal"
            />
            <div className="media-body">
              <h5 className="mt-0">Top-aligned media</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </p>
              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {alignCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="media">
            <img
              src="https://placeimg.com/64/64/animals"
              className="mr-3"
              alt="Animal"
            />
            <div className="media-body">
              <h5 className="mt-0">Center-aligned media</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </p>
              <p className="mb-0">
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {centerAlignedCode}
          </SyntaxHighlighter>
        </div>
        <div className="mb-2">
          <div className="media">
            <img
              src="https://placeimg.com/64/64/animals"
              className="mr-3"
              alt="Animal"
            />
            <div className="media-body">
              <h5 className="mt-0">Bottom-aligned media</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </p>
              <p className="mb-0">
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {bottomAlignedCode}
          </SyntaxHighlighter>
        </div>

        <h2>
          컨텐츠 순서 <small>Order</small>
        </h2>
        <div className="mb-2">
          <div className="media">
            <div className="media-body">
              <h5 className="mt-0 mb-1">Media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
            <img
              src="https://placeimg.com/64/64/animals"
              className="mr-3"
              alt="Animal"
            />
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {orderCode}
          </SyntaxHighlighter>
        </div>

        <h2>미디어 리스트</h2>
        <div className="mb-2">
          <ul className="list-unstyled">
            <li className="media">
              <img
                src="https://placeimg.com/64/64/animals"
                className="mr-3"
                alt="Animal"
              />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
            <li className="media my-4">
              <img
                src="https://placeimg.com/64/64/animals"
                className="mr-3"
                alt="Animal"
              />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
            <li className="media">
              <img
                src="https://placeimg.com/64/64/animals"
                className="mr-3"
                alt="Animal"
              />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {mediaListCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default MediaObject;
