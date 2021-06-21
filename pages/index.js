import Layout from "../components/Layout";
import Navbar from "../components/module/HomeNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import stylesHome from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout title="Coffee Express">
        <Navbar />
        <div className={stylesHome.header}>
          <Container>
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
              <Card className={stylesHome.headerCard}>
                <div className="d-flex justify-content-around py-4">
                  <Card className={`${stylesHome.yellowBulletBackground}`}>
                    <img
                      src="/vector_orang.png"
                      className={stylesHome.cardBulletImage}
                    ></img>
                  </Card>
                  <Card className={stylesHome.yellowBulletBackground}>
                    <img
                      src="/vector_map.png"
                      className={stylesHome.cardBulletImage}
                    ></img>
                  </Card>
                  <Card className={stylesHome.yellowBulletBackground}>
                    <img
                      src="/vector_orang.png"
                      className={stylesHome.cardBulletImage}
                    ></img>
                  </Card>
                </div>
              </Card>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}
