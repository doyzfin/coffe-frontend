import Layout from "../../components/Layout";
import NavBar from "../../components/module/NavBar";
import { Col, Container, Row, Card, Button, Nav } from "react-bootstrap";
import styles from "../../styles/ProductCust.module.css";
import { useState } from "react";

export default function ProductCust() {
  const [dataCoupons, setDataCoupons] = useState([
    {
      image: "/image 46.png",
      name: "HAPPY MOTHERS DAYS",
      note: "Get one of our favorite menu for free!",
    },
    {
      image: "/image 43.png",
      name: "Get a cup of coffee for free on sunday morning",
      note: "Only at 7 to 9 AM",
    },
    {
      image: "/image 46.png",
      name: "HAPPY MOTHERS DAYS",
      note: "Get one of our favorite menu for free!",
    },
    {
      image: "/image 45.png",
      name: "HAPPY HALLOWEEN!",
      note: "Do you like chicken wings? Get 1 free only if you buy pinky promise",
    },
  ]);
  return (
    <Layout title="Product Cust">
      <NavBar />
      <Container fluid>
        <Row>
          <Col sm={4} className={styles.col1}>
            <h1 className={styles.title}>Promo Today</h1>
            <p className={styles.note}>
              Coupons will be updated every weeks.
              <br /> Check them out!{" "}
            </p>
            {dataCoupons.map((item, index) => {
              return (
                <Card className={styles.cardCoupons} key={index}>
                  <Row>
                    <Col xs={4}>
                      <Card.Img
                        alt=""
                        src={item.image}
                        className={styles.cardImgCoupons}
                        variant="left"
                      />
                    </Col>
                    <Col xs={8}>
                      <Card.Text className={styles.nameCoupons}>
                        {item.name}
                      </Card.Text>
                      <Card.Text className={styles.noteCoupons}>
                        {item.note}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card>
              );
            })}
            <Button className={styles.btnApply}>Apply Coupon</Button>
            <p className={styles.terms}>Terms and Condition</p>

            <p className={styles.listTerm}>
              1. You can only apply 1 coupon per day
              <br />
              2. It only for dine in
              <br />
              3. Buy 1 get 1 only for new user
              <br />
              4. Should make member card to apply coupon
            </p>
          </Col>
          <Col sm={8} className={styles.col2}>
            <Nav as="ul">
              <Nav.Item as="li">
                <Nav.Link href="#" className={styles.link}>
                  Favorite Product
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-1" className={styles.link}>
                  Coffee
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className={styles.link}>
                  Non Coffee
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className={styles.link}>
                  Foods
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className={styles.link}>
                  Add-on
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
