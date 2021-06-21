import Layout from "../../components/Layout";
import Navbar from "../../components/module/AdminDashboardNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../../styles/ManageOrderAdmin.module.css";
import Footer from "../../components/module/footer";
import axiosApiIntances from "utils/axios";
import { authPage } from "middleware/authorizationPage";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  // console.log("data", data);
  const res = await axiosApiIntances
    .get("invoice/pending", {
      headers: {
        Authorization: `Bearer ${data.token || ""}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });

  return {
    props: { data: res },
  };
}

export default function manageOrderAdmin(props) {
  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };
  console.log(props.data);
  return (
    <>
      <Layout title="Admin Order Manage">
        <Navbar />
        <div className={styles.pageBackground}>
          <Container className="pb-5">
            <Row>
              <Col lg={5} md={5} sm={5} xs={12} className="mt-5">
                <h4 className={`fw-bold ${styles.customerOrderStyle}`}>
                  Finish your
                </h4>
                <h4 className={`fw-bold ${styles.customerOrderStyle}`}>
                  customer order now.
                </h4>
                {props.data.data.map((item, index) => {
                  return (
                    <Card className={`mt-5 ${styles.bigCard}`} key={index}>
                      <div className="px-4">
                        <h3 className="fw-bold text-center mt-5 mb-2">
                          Delivery Order
                        </h3>
                        <span className="d-block text-center">
                          for {item.user_name}
                        </span>
                        {item.list_order.map((item, index) => {
                          if (item.size === "R") {
                            item.size = "Reguler";
                          } else if (item.size === "L") {
                            item.size = "Large";
                          } else if (item.size === "XL") {
                            item.size = "Extra Large";
                          }

                          return (
                            <div
                              className="d-flex justify-content-between mt-5 mb-3"
                              key={index}
                            >
                              <img src="/image 36.png"></img>
                              <div className="row px-4">
                                <span>{item.product_name}</span>
                                <span>x {item.qty}</span>
                                <span>{item.size}</span>
                              </div>
                              <span className="my-auto">
                                IDR {formatRupiah(item.total_price)}
                              </span>
                            </div>
                          );
                        })}

                        <hr />
                        <div className="d-flex justify-content-between my-2">
                          <span>SUBTOTAL</span>
                          <span>IDR 120.000</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>TAX & FEES</span>
                          <span>IDR 20.000</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>SHIPPING</span>
                          <span>IDR 10.000</span>
                        </div>
                        <div className="d-flex justify-content-between mt-5 mb-5">
                          <h5
                            className={`fw-bold text-center ${styles.brownText}`}
                          >
                            TOTAL
                          </h5>
                          <h5
                            className={`fw-bold text-center ${styles.brownText}`}
                          >
                            IDR 150.000
                          </h5>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </Col>
              <Col lg={7} md={7} sm={7} xs={12} className="mt-5">
                <div className="ms-5">
                  <div className="ms-5">
                    <div className="mt-5">
                      <div className="mt-5">
                        <div className="mt-5">
                          <div className="mt-5">
                            <h5
                              className={`mt-5 fw-bold ${styles.customerOrderStyle}`}
                            >
                              Payment method
                            </h5>
                            <Card className={`mt-4 ${styles.bigCard}`}>
                              <div className="p-4">
                                <form>
                                  <div className="d-flex h-100">
                                    <input
                                      type="radio"
                                      id="card"
                                      name="paymentMethod"
                                      value="card"
                                      className="my-auto"
                                    ></input>
                                    <span
                                      className={`${styles.cardVectorBackground} mx-2`}
                                    >
                                      <img
                                        src="/card vector.png"
                                        className={`${styles.cardVectorSize} my-2 mx-2`}
                                      ></img>
                                    </span>
                                    <label for="card" className="my-auto">
                                      Card
                                    </label>
                                  </div>
                                  <hr />
                                  <div className="d-flex h-100">
                                    <input
                                      type="radio"
                                      id="bankAccount"
                                      name="paymentMethod"
                                      value="bankAccount"
                                      className="my-auto"
                                    ></input>
                                    <span
                                      className={`${styles.bankAccountBackground} mx-2`}
                                    >
                                      <img
                                        src="/bank-account.png"
                                        className={`${styles.cardVectorSize} my-2 mx-2`}
                                      ></img>
                                    </span>
                                    <label
                                      for="bankAccount"
                                      className="my-auto"
                                    >
                                      Bank Account
                                    </label>
                                  </div>
                                  <hr />
                                  <div className="d-flex h-100">
                                    <input
                                      type="radio"
                                      id="cashOnDelivery"
                                      name="paymentMethod"
                                      value="cashOnDelivery"
                                      className="my-auto"
                                    ></input>
                                    <span
                                      className={`${styles.fastDeliveryBackground} mx-2`}
                                    >
                                      <img
                                        src="/fast-delivery 3.png"
                                        className={`${styles.cardVectorSize} my-2 mx-2`}
                                      ></img>
                                    </span>
                                    <label
                                      for="cashOnDelivery"
                                      className="my-auto"
                                    >
                                      Bank Account
                                    </label>
                                  </div>
                                </form>
                              </div>
                            </Card>
                            <div className="my-5">
                              <button className={styles.brownDoneButton}>
                                Mark as done
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
