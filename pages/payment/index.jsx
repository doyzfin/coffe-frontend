import Layout from "components/Layout";
import NavBar from "components/module/NavBar";
import Footer from "components/module/footer";
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import styles from "../../styles/Payment.module.css";
import { useState } from "react";

export default function payment() {
  const [dataOrder, setDataOrder] = useState([
    {
      name: "Hazelnut Latte",
      qty: " x 1",
      size: "Regular",
      price: "IDR 24.0",
      image: "/image 36.png",
    },
    {
      name: "Chicken Fire Wings",
      qty: "x 2",
      size: "250 gr",
      price: "IDR 30.0",
      image: "/image 37.png",
    },
  ]);
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

  const getDropdownVal = (event) => {
    console.log(event);
  };

  return (
    <Layout title="Payment & Delivery">
      <NavBar />
      <Container fluid className={styles.mainBackground}>
        <Container className={styles.mainContainer}>
          <Row>
            <Col sm={6}>
              <h1 className={styles.title}>
                Checkout your <br />
                item now!
              </h1>
              <Card className={styles.invoice}>
                <h1 className={styles.titleInvoice}>Order Summary</h1>
                {dataOrder.map((item, index) => {
                  return (
                    <Card className={styles.cardOrder} key={index}>
                      <Row>
                        <Col sm={3}>
                          <img
                            alt=""
                            src={item.image}
                            className={styles.imgOrder}
                          />
                        </Col>
                        <Col sm={6}>
                          <p className={styles.Order}>{item.name}</p>
                          <p className={styles.Order}>{item.qty}</p>
                          <p className={styles.Order}>{item.size}</p>
                        </Col>
                        <Col sm={3}>
                          <p className={styles.priceOrder}>{item.price}</p>
                        </Col>
                      </Row>
                    </Card>
                  );
                })}
                <hr />
                <Dropdown onSelect={getDropdownVal}>
                  <Dropdown.Toggle className={styles.dropdown}>
                    Select Promo
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    {dataCoupons.map((item, index) => {
                      return (
                        <Dropdown.Item href="#" key={index} eventKey={index}>
                          {item.name}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <hr />
                <Row className={styles.rowCount}>
                  <Col className={styles.countInvoice}>DISCOUNT</Col>
                  <Col className={styles.nominal}>IDR 10.000</Col>
                </Row>
                <Row className={styles.rowCount}>
                  <Col className={styles.countInvoice}>SUBTOTAL</Col>
                  <Col className={styles.nominal}>IDR 120.000</Col>
                </Row>
                <Row className={styles.rowCount}>
                  <Col className={styles.countInvoice}>TAX & FEES</Col>
                  <Col className={styles.nominal}>IDR 20.000</Col>
                </Row>
                <Row className={styles.rowCountTotal}>
                  <Col className={styles.countTotal} sm={6}>
                    TOTAL
                  </Col>
                  <Col className={styles.nominalTotal} sm={6}>
                    IDR 130.000
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col sm={6} className={styles.colDetails}>
              <Row>
                <Col>
                  <h1 className={styles.textDetails}>Address details</h1>
                </Col>
                <Col>
                  <p className={styles.edit}>Edit</p>
                </Col>
              </Row>
              <Card className={styles.cardAddress}>
                <p className={styles.address}>
                  <strong>Delivery</strong> to Iskandar Street
                </p>
                <hr />
                <p className={styles.addressDetails}>
                  Km 5 refinery road oppsite re <br />
                  public road, effurun, Jakarta
                </p>
                <hr />
                <p className={styles.phone}>+62 81348287878</p>
              </Card>
              <h1 className={styles.method}>Payment method</h1>
              <Card className={styles.cardMethod}>
                <Form>
                  <Form.Group>
                    <Form.Check>
                      <Form.Check.Input
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        className={styles.radio}
                      />
                      <Form.Check.Label>
                        <Row>
                          <Col>
                            <img
                              alt=""
                              src="/Rectangle 13.png"
                              className={styles.recMidtrans}
                            />
                            <img
                              alt=""
                              src="/Vector (7).png"
                              className={styles.logoMidtrans}
                            />
                          </Col>
                          <Col className={styles.midtrans}>Midtrans</Col>
                        </Row>
                      </Form.Check.Label>
                    </Form.Check>
                    <hr />
                    <Form.Check>
                      <Form.Check.Input
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        className={styles.radio}
                      />
                      <Form.Check.Label>
                        {" "}
                        <Row>
                          <Col xs={3}>
                            <img
                              alt=""
                              src="/Rectangle 12.png"
                              className={styles.recCod}
                            />
                            <img
                              alt=""
                              src="/fast-delivery 3.png"
                              className={styles.logoCod}
                            />
                          </Col>
                          <Col className={styles.cod} xs={9}>
                            Cash on delivery
                          </Col>
                        </Row>
                      </Form.Check.Label>
                    </Form.Check>
                  </Form.Group>
                </Form>
              </Card>
              <Button className={styles.btnConfirm}>Confirm and Pay</Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </Layout>
  );
}
