import Layout from "../components/Layout";
import Navbar from "../components/module/HomeNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import stylesHome from "../styles/Home.module.css";
import {useState} from "react";

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
          <Row className="pb-5">
            <Col lg={6} md={6} sm={5} xs={12}>
              <img src="/35744 1.png" className="img-fluid"></img>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} >
              <div className={`position-relative ${stylesHome.secondRowRight}`}>
              <h2 className={`${stylesHome.secondRowRightHeader} fw-bold`}>We Provide Good Coffee and Healthy Meals</h2>
              <p className={stylesHome.secondRowRightParagraph}>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
              <ul className={stylesHome.secondRowRightLists}>
                <li>High quality beans</li> 
                <li>Healthy meals, you can request the ingredients</li>
                <li>Chat with our staff to get better experience for ordering</li>
                <li>Free member card with a minimum purchase of IDR 200.000.</li>
              </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={stylesHome.greyBackground}>
          <Container className="py-5">
            <Row className="py-5">
              <h2 className="text-center">Here Is People's Favorite</h2>
              <span className="d-block text-center text-wrap">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</span>
            </Row>
          </Container>
          <Container>
            <Row className={stylesHome.gridFavoriteRow}>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className={`${stylesHome.gridFavoriteCard}`}> 
                <img src="/image 22.png" className={stylesHome.gridFavoritePicture}></img>
                  <div className={`${stylesHome.gridFavoriteDescription} `}>
                    <span className={`d-block text-center`}>Hazelnut Latte</span> 
                    <ul className={stylesHome.gridFavoriteDescriptionLists}>
                      <li>Hazelnut Syrup</li>
                      <li>Wanilla Whipped Cream</li>
                      <li>Ice / Hot</li>
                      <li>Sliced Banana on Top</li>
                    </ul>
                    <h5 className="fw-bold">IDR 25.000</h5>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className={`${stylesHome.gridFavoriteCard}`}> 
                <img src="/image 27.png" className={stylesHome.gridFavoritePicture}></img>
                  <div className={`${stylesHome.gridFavoriteDescription} `}>
                    <span className={`d-block text-center`}>Pinky Promise</span> 
                    <ul className={stylesHome.gridFavoriteDescriptionLists}>
                      <li>1 Shot of Coffee</li>
                      <li>Wanilla Whipped Cream</li>
                      <li>Chocolate Biscuits</li>
                      <li>Strawberry Syrup</li> 
                      <li>Sliced Strawberry on Top</li>
                    </ul>
                    <h5 className="fw-bold">IDR 30.000</h5>
                  </div>
                </div>
              </Col> 
              <Col lg={4} md={4} sm={12} xs={12}>
              <div className={`${stylesHome.gridFavoriteCard}`}> 
                <img src="/image 30.png" className={stylesHome.gridFavoritePicture}></img>
                  <div className={`${stylesHome.gridFavoriteDescription} `}>
                    <span className={`d-block text-center`}>Chicken Wings</span> 
                    <ul className={stylesHome.gridFavoriteDescriptionLists}>
                      <li>Wings</li>
                      <li>Drum Stick</li>
                      <li>Mayonaise and Lemon</li>
                      <li>Hot Fried</li> 
                      <li>Secret Recipe</li> 
                      <li>Buy 1 Get 1 for Dine in</li>
                    </ul>
                    <h5 className="fw-bold">IDR 30.000</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}
