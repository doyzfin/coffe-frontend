import Layout from "components/Layout";
import Footer from "components/module/footer";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import styles from "../../styles/Payment.module.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { authPage } from "middleware/authorizationPage";
import axiosApiIntances from "utils/axios";
import { useRouter } from "next/router";
import NavBar from "components/module/NavBar";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  const user = await axiosApiIntances
    .get(`user/${data.userId}`, {
      headers: {
        Authorization: "Bearer " + data.token,
      },
    })
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
      return {};
    });

  return {
    props: { user },
  };
}

export default function payment(props) {
  const router = useRouter();
  const [orderItem, setOrderItem] = useState([]);
  const [dataCoupons, setDataCoupons] = useState([]);
  const [useCoupun, setUseCoupon] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    setOrderItem(JSON.parse(localStorage.getItem("item")));
    setDataCoupons([JSON.parse(Cookies.get("coupon"))]);
  }, []);

  const convertToRupiah = (amount) => {
    let number_string = amount.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? "." : "";
      return (rupiah += separator + ribuan.join("."));
    }
  };

  const handleCoupon = () => {
    const option = document.getElementById("dropdown");
    const oneCoupon = option.value.split(",")[0];
    setUseCoupon(parseInt(oneCoupon));
    setPromoCode(option.value.split(",")[1]);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirm = () => {
    let price;
    let productId;
    let size;
    let qty;
    let totalPrice;
    orderItem.map((item) => {
      price = item.price;
      productId = item.productId;
      size = item.size;
      qty = item.count;
      totalPrice = item.price;
    });
    const setData = {
      userId: Cookies.get("userId"),
      invoicePromoCode: promoCode,
      invoiceSubtotal: price - useCoupun,
      paymentMethod: paymentMethod,
      orders: [
        {
          productId,
          size,
          qty,
          totalPrice,
        },
      ],
    };

    axiosApiIntances
      .post("/invoice/create", setData, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
      .then((res) => {
        Cookies.remove("coupon");
        localStorage.removeItem("item");
        alert("Pesanan berhasil");
        router.push("/product-cust");
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
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
                {orderItem.map((item, index) => {
                  return (
                    <Card className={styles.cardOrder} key={index}>
                      <Row>
                        <Col sm={3}>
                          <img
                            alt=""
                            src={`http://localhost:3005/backend5/api/${item.productImage}`}
                            className={styles.imgOrder}
                          />
                        </Col>
                        <Col sm={5}>
                          <p className={styles.Order}>{item.productName}</p>
                          <p className={styles.Order}>x{item.count}</p>
                          <p className={styles.Order}>{item.size}</p>
                        </Col>
                        <Col sm={4}>
                          <p className={styles.priceOrder}>
                            IDR{convertToRupiah(item.price)}
                          </p>
                        </Col>
                      </Row>
                    </Card>
                  );
                })}
                <hr />

                {dataCoupons.map((item, index) => {
                  return (
                    <select
                      id="dropdown"
                      onChange={handleCoupon}
                      className={styles.dropdown}
                      key={index}
                    >
                      <option value="">Select Coupon</option>
                      <option value={[item.maxDiscount, item.promoCode]}>
                        {item.name}
                      </option>
                    </select>
                  );
                })}
                <hr />
                <Row className={styles.rowCount}>
                  <Col className={styles.countInvoice}>DISCOUNT</Col>
                  <Col className={styles.nominal}>
                    IDR{" "}
                    {useCoupun != undefined ? convertToRupiah(useCoupun) : 0}
                  </Col>
                </Row>
                <Row className={styles.rowCount}>
                  <Col className={styles.countInvoice}>SUBTOTAL</Col>
                  {orderItem.map((item, index) => {
                    return (
                      <Col key={index} className={styles.nominal}>
                        IDR {convertToRupiah(item.price)}
                      </Col>
                    );
                  })}
                </Row>
                <Row className={styles.rowCountTotal}>
                  <Col className={styles.countTotal} sm={6}>
                    TOTAL
                  </Col>
                  {orderItem.map((item, index) => {
                    return (
                      <Col key={index} className={styles.nominalTotal} sm={6}>
                        IDR{" "}
                        {useCoupun != undefined
                          ? convertToRupiah(item.price - useCoupun)
                          : convertToRupiah(item.price)}
                      </Col>
                    );
                  })}
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
                  <strong>Delivery</strong>
                </p>
                <hr />
                <p className={styles.addressDetails}>
                  {props.user.user_address}
                </p>
                <hr />
                <p className={styles.phone}>{props.user.user_phone}</p>
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
                        onClick={() => handlePaymentMethod("Midtrans")}
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
                        onClick={() => handlePaymentMethod("Cash on delivery")}
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
              <Button className={styles.btnConfirm} onClick={handleConfirm}>
                Confirm and Pay
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </Layout>
  );
}
