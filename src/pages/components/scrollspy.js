import React from 'react';
import Layout from '../../components/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/hljs';

const exampleCode = `<nav id="navbar-example2" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#fat">@fat</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mdo">@mdo</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#one">one</a>
        <a class="dropdown-item" href="#two">two</a>
        <div role="separator" class="dropdown-divider"></div>
        <a class="dropdown-item" href="#three">three</a>
      </div>
    </li>
  </ul>
</nav>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
  <h4 id="fat">@fat</h4>
  <p>...</p>
  <h4 id="mdo">@mdo</h4>
  <p>...</p>
  <h4 id="one">one</h4>
  <p>...</p>
  <h4 id="two">two</h4>
  <p>...</p>
  <h4 id="three">three</h4>
  <p>...</p>
</div>`;

const nestedNavCode = `<nav id="navbar-example3" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <nav class="nav nav-pills flex-column">
    <a class="nav-link" href="#item-1">Item 1</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
      <a class="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a class="nav-link" href="#item-2">Item 2</a>
    <a class="nav-link" href="#item-3">Item 3</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
      <a class="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
  <h4 id="item-1">Item 1</h4>
  <p>...</p>
  <h5 id="item-1-1">Item 1-1</h5>
  <p>...</p>
  <h5 id="item-1-2">Item 1-2</h5>
  <p>...</p>
  <h4 id="item-2">Item 2</h4>
  <p>...</p>
  <h4 id="item-3">Item 3</h4>
  <p>...</p>
  <h5 id="item-3-1">Item 3-1</h5>
  <p>...</p>
  <h5 id="item-3-2">Item 3-2</h5>
  <p>...</p>
</div>`;

const listGroupCode = `<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
</div>
<div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
  <h4 id="list-item-1">Item 1</h4>
  <p>...</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>...</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>...</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>...</p>
</div>`;

class Scrollspy extends React.Component {
  render() {
    return (
      <Layout>
        <h1>
          스크롤감지 <small>Scrollspy</small>
        </h1>

        <h2>샘플</h2>
        <div className="mb-2">
          <nav id="navbar-example2" className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#fat">
                  @fat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mdo">
                  @mdo
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#one">
                    one
                  </a>
                  <a className="dropdown-item" href="#two">
                    two
                  </a>
                  <div role="separator" className="dropdown-divider" />
                  <a className="dropdown-item" href="#three">
                    three
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div
            data-spy="scroll"
            data-target="#navbar-example2"
            data-offset="0"
            style={{ position: 'relative', height: '200px', overflow: 'auto' }}
          >
            <h4 id="fat">@fat</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              itaque maiores quos recusandae sed unde. Dolore harum quas quos
              vitae? Explicabo nisi nulla numquam, placeat quibusdam sequi sint
              ut voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              cupiditate dolorum eius harum, iure labore provident? Ab inventore
              numquam sunt! Blanditiis dolorem ex excepturi expedita facilis
              illum in neque voluptates?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              architecto autem culpa dolorem ea earum enim illum incidunt
              inventore iusto natus nostrum numquam officiis, optio porro
              recusandae sapiente tempora tempore!
            </p>
            <h4 id="mdo">@mdo</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur at consequuntur debitis dolore eaque expedita
              laudantium officia quibusdam ratione vel. Accusamus dolore
              doloribus ea inventore laborum minus nisi qui, similique.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              aliquam aspernatur dignissimos, dolore error fugiat iusto nobis
              rerum totam vitae! Ad aliquam assumenda iusto magnam praesentium
              ratione tempore temporibus voluptatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam et labore laborum nesciunt odio quo reiciendis. Dolores
              fugiat minus nisi perspiciatis quaerat quos repellendus sed. Eius
              impedit nulla quia?
            </p>
            <h4 id="one">one</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              autem, commodi consequuntur dicta dolore eligendi enim error in
              incidunt laboriosam, laborum numquam omnis quaerat quos saepe sit
              velit, voluptatem voluptates?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              eaque ipsa labore necessitatibus ratione veniam. A, ad atque cum
              dolore ducimus explicabo, illum iure modi pariatur quam, quia
              veniam voluptate?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              esse harum id, illo ipsam, iusto labore laudantium magnam nobis
              nulla odio quisquam quo repellendus reprehenderit similique
              suscipit totam voluptas. Magnam.
            </p>
            <h4 id="two">two</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
              doloribus eveniet, impedit iure molestiae pariatur placeat
              quibusdam repellendus sequi tempore totam vel veritatis voluptas
              voluptates! Blanditiis exercitationem provident voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus dolorum ex pariatur repudiandae, tempora voluptates.
              Alias animi cumque dicta inventore ipsam iusto officia. Autem
              beatae explicabo iure provident quo ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              atque deserunt eaque, eius eos rem ullam unde voluptates! A
              consectetur eum, exercitationem hic labore quasi repudiandae?
              Alias dolorem perspiciatis veritatis.
            </p>
            <h4 id="three">three</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              autem blanditiis distinctio ducimus, earum eligendi eveniet
              exercitationem magnam maiores modi nemo numquam obcaecati,
              recusandae repellat soluta tempora temporibus ullam veritatis!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
              architecto aspernatur, aut corporis cum cumque cupiditate eius est
              facere ipsa magni non nostrum provident quaerat, recusandae sit
              voluptates voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
              alias animi commodi corporis deleniti dolorem, earum eligendi
              eveniet harum in iste labore minus modi nisi officia quaerat quos
              sapiente?
            </p>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {exampleCode}
          </SyntaxHighlighter>
        </div>

        <h2>중첩 네비게이션과 사용시</h2>
        <div className="mb-2">
          <div className="row">
            <div className="col-4">
              <nav
                id="navbar-example3"
                className="navbar navbar-light bg-light"
              >
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link" href="#item-1">
                    Item 1
                  </a>
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link ml-3 my-1" href="#item-1-1">
                      Item 1-1
                    </a>
                    <a className="nav-link ml-3 my-1" href="#item-1-2">
                      Item 1-2
                    </a>
                  </nav>
                  <a className="nav-link" href="#item-2">
                    Item 2
                  </a>
                  <a className="nav-link" href="#item-3">
                    Item 3
                  </a>
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link ml-3 my-1" href="#item-3-1">
                      Item 3-1
                    </a>
                    <a className="nav-link ml-3 my-1" href="#item-3-2">
                      Item 3-2
                    </a>
                  </nav>
                </nav>
              </nav>
            </div>
            <div className="col-8">
              <div
                data-spy="scroll"
                data-target="#navbar-example3"
                data-offset="0"
                style={{
                  position: 'relative',
                  height: '350px',
                  overflow: 'auto'
                }}
              >
                <h4 id="item-1">Item 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto debitis ea facere, magni nesciunt perferendis porro
                  quisquam? Consequatur ducimus eligendi ex laboriosam natus
                  nemo reiciendis suscipit unde. Necessitatibus, similique,
                  voluptates.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, adipisci aut eius et eum ex itaque minima minus
                  modi necessitatibus, omnis perspiciatis possimus, quaerat
                  quisquam repellat repellendus reprehenderit rerum sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  eum impedit laboriosam necessitatibus nisi non odio provident
                  quis sint temporibus! Error eveniet, molestias natus ratione
                  repudiandae sequi ullam voluptas voluptatem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  aperiam possimus saepe. A autem deserunt dicta dolorum esse
                  fugiat id inventore iure iusto, magni non pariatur possimus
                  quidem, quisquam similique?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid amet animi distinctio dolor id, quis totam vitae!
                  Accusantium architecto culpa dicta distinctio excepturi
                  molestias necessitatibus neque sequi similique tempore. Rerum.
                </p>
                <h5 id="item-1-1">Item 1-1</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aliquam amet animi, aperiam commodi consequatur deleniti
                  dignissimos dolor doloremque enim et, expedita minus nobis
                  quam rem reprehenderit rerum vel voluptatibus?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda consectetur eligendi ex inventore ipsam iusto quam
                  quas sit. Consequuntur culpa, dolorem ea in labore non
                  voluptates! Commodi consectetur nihil placeat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci aliquam distinctio eum laboriosam officia officiis
                  quae quasi quod rem repellendus? Aliquam architecto
                  consectetur expedita hic molestias provident qui quia, quidem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto iste, libero minima nobis quaerat quia similique
                  tempore totam ut vero? Cupiditate dicta ipsa natus neque
                  nesciunt nihil perspiciatis rerum voluptatibus!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium architecto consequuntur culpa deleniti deserunt
                  esse, ipsum iure magni nam non praesentium provident, quisquam
                  saepe sed sint sit temporibus velit voluptatem.
                </p>
                <h5 id="item-1-2">Item 1-2</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam architecto aspernatur error excepturi inventore modi,
                  officia quos ratione velit veniam. Alias dolores eligendi fuga
                  perferendis repellat? Iusto laboriosam quae ratione!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam animi at, commodi consequuntur cumque dignissimos
                  dolor, doloremque ducimus enim, excepturi incidunt labore
                  minima nostrum quod recusandae sit tempora totam voluptate?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  adipisci incidunt ipsa nemo. Atque blanditiis commodi dicta
                  dolor eligendi explicabo libero nesciunt odit quia, sequi
                  tempora, tenetur voluptatibus voluptatum! Aut.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae eligendi reprehenderit vel. Blanditiis delectus
                  exercitationem ipsa laborum nihil officia perferendis possimus
                  quidem, sequi veritatis? Accusamus dolorum ea obcaecati rem
                  tempora!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid aut consequuntur cum cupiditate delectus deserunt
                  expedita fugiat, ipsa minus quas, quibusdam quis sed tempora
                  vitae voluptatem! Ad dolorum sunt voluptate.
                </p>
                <h4 id="item-2">Item 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid consequatur delectus dolorum incidunt molestias
                  possimus, recusandae. Blanditiis consectetur ea excepturi
                  expedita officia omnis qui, quo, rerum saepe sed suscipit
                  tempora!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias, animi cupiditate debitis explicabo incidunt laudantium
                  magnam, quisquam quo, rem repellat saepe veniam vero. Alias
                  beatae ipsa nemo, quae quidem veritatis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                  amet beatae culpa delectus fuga perspiciatis provident quia
                  quidem, quisquam sequi, soluta totam voluptas voluptatem?
                  Aliquid natus optio rem vel. Voluptates?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  architecto corporis deleniti eaque eligendi eum ex, impedit,
                  ipsam numquam quaerat quibusdam veniam! Hic perferendis rem
                  saepe! Debitis harum repudiandae voluptatem?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci architecto consectetur consequuntur cupiditate
                  doloremque fugit, illo minima nam natus necessitatibus numquam
                  pariatur perspiciatis quae quidem ratione, sed similique totam
                  veritatis.
                </p>
                <h4 id="item-3">Item 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae exercitationem ipsum voluptate. A adipisci animi
                  architecto aut doloremque dolorum earum excepturi minima
                  nesciunt nobis quidem quo quod, sequi velit voluptatem?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  alias autem deserunt doloribus earum enim esse est hic maiores
                  maxime non nostrum quas quidem quisquam repellat suscipit
                  totam, veniam voluptatibus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium amet animi aspernatur cumque deserunt dicta
                  ducimus neque obcaecati perspiciatis placeat porro saepe, sunt
                  temporibus? Consequatur eos minus sit! Obcaecati, rem!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid cupiditate doloribus enim fuga numquam quo, soluta
                  totam. A accusantium nam numquam. Culpa cupiditate impedit
                  odio odit, ratione recusandae? Earum, excepturi?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  consectetur culpa deserunt dicta illum itaque natus officiis,
                  perspiciatis sed soluta suscipit vero voluptatibus voluptatum?
                  Aut consectetur deleniti minima odit pariatur?
                </p>
                <h5 id="item-3-1">Item 3-1</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam commodi corporis debitis deleniti eligendi, enim ex
                  explicabo illum ipsum minus, molestias nihil obcaecati quod
                  tenetur totam, unde veniam voluptatem voluptatum?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, cumque enim hic iure maiores nam nihil veritatis?
                  Aliquam corporis ex itaque odio quod? Consequatur distinctio
                  id magnam molestias quis unde!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur deserunt dicta, explicabo hic laborum, magni
                  molestiae nam nemo nihil numquam porro sed, sit suscipit ut
                  voluptatem. Exercitationem hic saepe soluta.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium, aliquam animi at beatae culpa distinctio dolore
                  dolorum et ipsam iure magnam natus nemo optio qui quia quidem,
                  sapiente sit voluptates.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis ipsam minus recusandae tenetur voluptas! Alias
                  aspernatur dicta, dolorem enim fuga, incidunt inventore
                  laborum non odio officiis, qui saepe sint voluptatum.
                </p>
                <h5 id="item-3-2">Item 3-2</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci asperiores cupiditate debitis, dolore dolorem eaque
                  esse eveniet explicabo illum maxime nobis officiis quam quasi
                  quos ratione tempore veritatis vero vitae!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor iste nesciunt nostrum officiis rem! Ea id iusto nostrum
                  repellat vitae? Aspernatur at, doloribus nostrum quam quas
                  quisquam quod rem veritatis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aliquid aperiam asperiores blanditiis consequatur cupiditate
                  delectus eligendi id laborum, molestiae, officiis placeat
                  possimus praesentium quisquam quod, rem reprehenderit sequi
                  totam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  deserunt exercitationem facere nam natus non obcaecati,
                  officiis perspiciatis porro rem repellat repellendus similique
                  voluptates. Adipisci dolorum fugiat in nostrum praesentium!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus asperiores corporis debitis dolor dolores expedita
                  facilis harum illo, illum itaque labore magni perferendis
                  quasi qui quia ratione, recusandae velit voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {nestedNavCode}
          </SyntaxHighlighter>
        </div>

        <h2>리스트 그룹과 사용시</h2>
        <div className="mb-2">
          <div className="row">
            <div className="col-4">
              <div id="list-example" className="list-group">
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-1"
                >
                  Item 1
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-2"
                >
                  Item 2
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-3"
                >
                  Item 3
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-4"
                >
                  Item 4
                </a>
              </div>
            </div>
            <div className="col-8">
              <div
                data-spy="scroll"
                data-target="#list-example"
                data-offset="0"
                className="scrollspy-example"
                style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'auto'
                }}
              >
                <h4 id="list-item-1">Item 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur assumenda dolorum illo illum nam repellat voluptate
                  voluptates? Aliquid assumenda consequuntur deserunt, dolor
                  eaque exercitationem inventore optio quis quisquam rerum
                  sequi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur assumenda dolorum illo illum nam repellat voluptate
                  voluptates? Aliquid assumenda consequuntur deserunt, dolor
                  eaque exercitationem inventore optio quis quisquam rerum
                  sequi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur assumenda dolorum illo illum nam repellat voluptate
                  voluptates? Aliquid assumenda consequuntur deserunt, dolor
                  eaque exercitationem inventore optio quis quisquam rerum
                  sequi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur assumenda dolorum illo illum nam repellat voluptate
                  voluptates? Aliquid assumenda consequuntur deserunt, dolor
                  eaque exercitationem inventore optio quis quisquam rerum
                  sequi.
                </p>
                <h4 id="list-item-2">Item 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus ad, commodi consequuntur culpa cupiditate distinctio
                  doloribus, eaque et facere fuga illo labore laborum nostrum
                  quam quisquam saepe unde, voluptatem! Animi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus ad, commodi consequuntur culpa cupiditate distinctio
                  doloribus, eaque et facere fuga illo labore laborum nostrum
                  quam quisquam saepe unde, voluptatem! Animi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus ad, commodi consequuntur culpa cupiditate distinctio
                  doloribus, eaque et facere fuga illo labore laborum nostrum
                  quam quisquam saepe unde, voluptatem! Animi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus ad, commodi consequuntur culpa cupiditate distinctio
                  doloribus, eaque et facere fuga illo labore laborum nostrum
                  quam quisquam saepe unde, voluptatem! Animi.
                </p>
                <h4 id="list-item-3">Item 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque debitis eum explicabo minus optio, sapiente similique
                  sint voluptas! Facere fuga hic neque pariatur quis
                  reprehenderit vero. Dolorem laboriosam non quis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque debitis eum explicabo minus optio, sapiente similique
                  sint voluptas! Facere fuga hic neque pariatur quis
                  reprehenderit vero. Dolorem laboriosam non quis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque debitis eum explicabo minus optio, sapiente similique
                  sint voluptas! Facere fuga hic neque pariatur quis
                  reprehenderit vero. Dolorem laboriosam non quis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque debitis eum explicabo minus optio, sapiente similique
                  sint voluptas! Facere fuga hic neque pariatur quis
                  reprehenderit vero. Dolorem laboriosam non quis.
                </p>
                <h4 id="list-item-4">Item 4</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci aliquam facilis incidunt, libero molestiae
                  necessitatibus quas. Dolorum facere iste placeat vitae
                  voluptas. Beatae esse, eveniet itaque necessitatibus placeat
                  suscipit velit?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci aliquam facilis incidunt, libero molestiae
                  necessitatibus quas. Dolorum facere iste placeat vitae
                  voluptas. Beatae esse, eveniet itaque necessitatibus placeat
                  suscipit velit?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci aliquam facilis incidunt, libero molestiae
                  necessitatibus quas. Dolorum facere iste placeat vitae
                  voluptas. Beatae esse, eveniet itaque necessitatibus placeat
                  suscipit velit?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci aliquam facilis incidunt, libero molestiae
                  necessitatibus quas. Dolorum facere iste placeat vitae
                  voluptas. Beatae esse, eveniet itaque necessitatibus placeat
                  suscipit velit?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SyntaxHighlighter language="html" style={darcula}>
            {listGroupCode}
          </SyntaxHighlighter>
        </div>
      </Layout>
    );
  }
}

export default Scrollspy;
