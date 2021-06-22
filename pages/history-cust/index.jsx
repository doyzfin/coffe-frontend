import Layout from "components/Layout";
import NavBar from "components/module/NavBar";
import Footer from "components/module/footer";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import styles from "../../styles/HistoryCust.module.css";
import { useState, useEffect } from "react";
import { authPage } from "middleware/authorizationPage";
import Cookie from "js-cookie";

import { connect } from "react-redux";
import { getOrder, deleteOrder } from "redux/actions/order";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const data = await authPage(context);

  return {
    props: {},
  };
}

function historyCust(props) {
  const [dataHistory, setDataHistory] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [orderId, setOrderId] = useState(0);

  useEffect(() => {
    getHistory();
  }, []);

  const handleClick = () => {
    setIsClick(true);
  };

  const handleCloseClick = () => {
    setIsClick(false);
  };

  const handleDelete = (id) => {
    setOrderId(id);
    setIsDelete(true);
  };

  const handleCloseDelete = () => {
    setIsDelete(false);
  };

  const getHistory = () => {
    props
      .getOrder(Cookie.get("userId"), Cookie.get("token"))
      .then((res) => {
        // console.log(res.value.data.data);
        setDataHistory(res.value.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDeleteOrder = () => {
    console.log(orderId);
    props
      .deleteOrder(orderId, Cookie.get("token"))
      .then((res) => {
        handleCloseDelete();
        getHistory();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // console.log(props);

  return (
    <Layout title="History Customer">
      <Modal
        show={isDelete}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.modal}
        onHide={handleCloseDelete}
      >
        <Modal.Body className={styles.modalBody}>
          <p className={styles.textDelete}>
            Are you sure want to delete the selected items?
          </p>
          <Button onClick={handleCloseDelete} className={styles.btnClose}>
            Close
          </Button>
          <Button onClick={handleDeleteOrder} className={styles.btnDelete}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>

      <NavBar />
      <Container fluid className={styles.mainContainer}>
        <Container className={styles.container}>
          <h1 className={styles.text}>Let’s see what you have bought!</h1>
          <p className={styles.noteText}>Long press to delete item</p>
          <Row>
            {dataHistory.map((item, index) => {
              return (
                <Col key={index} sm={4}>
                  {isClick ? (
                    <Card className={styles.cardHistoryClick}>
                      <img
                        alt=""
                        src="/Ellipse 15.png"
                        className={styles.forDelete}
                        onClick={() => {
                          handleDelete(item.order_id);
                        }}
                      />
                      <img
                        alt=""
                        src="/Ellipse 183.png"
                        className={styles.forCancel}
                        onClick={handleCloseClick}
                      />
                      <img
                        alt=""
                        src="/Vector (6).png"
                        className={styles.imgDelete}
                        onClick={() => {
                          handleDelete(item.order_id);
                        }}
                      />
                      <img
                        alt=""
                        src="/x.png"
                        className={styles.imgCancel}
                        onClick={handleCloseClick}
                      />
                      <Row>
                        <Col xs={4}>
                          <img
                            alt=""
                            src="/makanan3.png"
                            className={styles.imgHistory}
                          />
                        </Col>
                        <Col xs={8}>
                          <h1 className={styles.nameHistory}>
                            {item.invoice_number}
                          </h1>
                          <p className={styles.priceHistory}>
                            IDR {item.total_price}
                          </p>
                          <p className={styles.statusHistory}>
                            {item.order_status}
                          </p>
                        </Col>
                      </Row>
                    </Card>
                  ) : (
                    <Card className={styles.cardHistory} onClick={handleClick}>
                      <Row>
                        <Col xs={4}>
                          <img
                            alt=""
                            src={
                              item.product_image.length > 0
                                ? `${process.env.IMAGE_URL}/${item.product_image}`
                                : "/makanan3.png"
                            }
                            className={styles.imgHistory}
                          />
                        </Col>
                        <Col xs={8}>
                          <h1 className={styles.nameHistory}>
                            {item.invoice_number}
                          </h1>
                          <p className={styles.priceHistory}>
                            IDR {item.total_price}
                          </p>
                          <p className={styles.statusHistory}>
                            {item.order_status}
                          </p>
                        </Col>
                      </Row>
                    </Card>
                  )}
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
      <Footer />
    </Layout>
  );
}

const mapDispatchToProps = { getOrder, deleteOrder };
export default connect(null, mapDispatchToProps)(historyCust);
