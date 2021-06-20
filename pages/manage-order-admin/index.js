import Layout from "../../components/Layout";
import Navbar from "../../components/module/NavBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../../styles/ManageOrderAdmin.module.css";

export default function manageOrderAdmin() {
  return (
    <>
      <Layout title="Admin Order Manage">
        <Navbar />
        <div className={styles.pageBackground}>
          <Container>
            <Row>
              <Col lg={5} md={5} sm={5} xs={12} className="mt-5">
                <h4 className={`fw-bold ${styles.customerOrderStyle}`}>
                  Finish your
                </h4>
                <h4 className={`fw-bold ${styles.customerOrderStyle}`}>
                  customer order now.
                </h4>
                <Card>
                  <div className="px-4">
                    <h3 className="fw-bold text-center mt-5 mb-2">
                      Delivery Order
                    </h3>
                    <span className="d-block text-center">for Zulaikha</span>
                    <div className="d-flex justify-content-between mt-5 mb-3">
                      <img src="/image 36.png"></img>
                      <div className="row px-4">
                        <span>Hazelnut Latte</span>
                        <span>x 1</span>
                        <span>Regular</span>
                      </div>
                      <span className="my-auto">IDR 24,0</span>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <img src="/image 37.png"></img>
                      <div className="row px-4">
                        <span>Chicken Fire Wings</span>
                        <span>x 2</span>
                      </div>
                      <span className="my-auto">IDR 30,0</span>
                    </div>
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
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}
