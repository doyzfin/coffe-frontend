import Layout from "../components/Layout";
import Navbar from "../components/module/HomeNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import stylesHome from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout title="Coffee Express">
        <Navbar />
        <div className={`${stylesHome.header}`}>
          <Container className={`position-relative`}>
            <Row>
              <Col
                lg={5}
                md={5}
                sm={5}
                xs={12}
                className={stylesHome.headerLeft}
              >
                <h2 className={`fw-bold ${stylesHome.headerLineHeight}`}>
                  Start Your Day With Coffee and Good Meals
                </h2>
                <p
                  className={`fw-bold ${stylesHome.headerParagraphLineHeight}`}
                >
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. Start your day with us for a bigger
                  smile!
                </p>
                <button className={stylesHome.yellowButton}>Get Started</button>
              </Col>

              {/* Experimental Row */}
              <div
                className={`container position-absolute ${stylesHome.headerCardBackground}`}
              >
                <div className={`${stylesHome.headerCardRow} row py-4`}>
                  <Col>
                    <Row className="h-100">
                      <Col className="my-auto">
                        <div
                          className={`${stylesHome.yellowBulletBackground} float-end`}
                        >
                          <img
                            src="/vector_orang.png"
                            className={stylesHome.cardBulletImage}
                          ></img>
                        </div>
                      </Col>
                      <Col className={stylesHome.bulletDescription}>
                        <span className="fw-bold d-block">90+</span>
                        <span className="d-block">Staff</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="h-100">
                      <Col className="my-auto">
                        <div
                          className={`${stylesHome.yellowBulletBackground} float-end`}
                        >
                          <img
                            src="/vector_map.png"
                            className={`${stylesHome.cardBulletImage}`}
                          ></img>
                        </div>
                      </Col>
                      <Col className={stylesHome.bulletDescription}>
                        <span className="fw-bold d-block">30+</span>
                        <span className="d-block">Store</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="h-100">
                      <Col className="my-auto">
                        <div
                          className={`${stylesHome.yellowBulletBackground} float-end`}
                        >
                          <img
                            src="/vector_hati.png"
                            className={`${stylesHome.cardBulletImage} ${stylesHome.heartBulletSize}`}
                          ></img>
                        </div>
                      </Col>
                      <Col className={stylesHome.bulletDescription}>
                        <span className="fw-bold d-block">30+</span>
                        <span className="d-block">Store</span>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <Container className={stylesHome.secondRow}>
          <Row>
            <Col lg={6} md={6} sm={5} xs={12}>
              Left
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              Right
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
