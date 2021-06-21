import Navbar from "../../components/module/NavBar";
import Layout from "../../components/Layout";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import styles from "../../styles/SetPromo.module.css";
import Footer from "../../components/module/greyFooter";

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: { user: context.query },
  };
}
export default function updatepromo(props) {
  console.log("This is " + props.user.id + "!");
  return (
    <>
      <Layout title="Update Promo">
        <Navbar />
        <Container>
          <Row className="pt-5">
            <Col lg={4} md={4} sm={12} xs={12}>
              <span className="d-block">
                Promo {`>`} <span className="fw-bold">Update Promo</span>
              </span>
              <div className="pt-5">
                <div className="pt-3">
                  <Card className={`${styles.picturePlaceBackground} mx-auto`}>
                    <img
                      src="/photo-camera-black-tool 4.png"
                      className={`${styles.picturePlace} mx-auto my-auto`}
                    ></img>
                  </Card>
                </div>
              </div>
              <div className="pt-4">
                <button className={styles.yellowishButton}>
                  Choose From Gallery
                </button>
              </div>
              <form>
                <div className="form-group">
                  <label className={styles.boldBrownText1}>
                    Enter the discount:{" "}
                  </label>
                  <select
                    className={`${styles.setPromoForm1} w-100 form-control`}
                  >
                    <option value="20%">20%</option>
                    <option value="30%">30%</option>
                    <option value="50%">50%</option>
                    <option value="70%">70%</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className={styles.boldBrownText1}>
                    Expire date :{" "}
                  </label>
                  <input
                    className={`${styles.setPromoForm1} w-100 form-control`}
                    type="date"
                  ></input>
                  <input
                    className={`${styles.setPromoForm1} w-100 form-control`}
                    type="date"
                  ></input>
                </div>
              </form>
            </Col>
            <Col lg={7} md={7} sm={12} xs={12}>
              <div className={styles.leftPanel}>
                <form>
                  <div className="form-group">
                    <label className={styles.boldBrownText}>Name: </label>
                    <input
                      className={`${styles.setPromoForm} w-100 form-control`}
                      type="text"
                      placeholder="Type product name min. 50 characters"
                    ></input>
                  </div>
                  <div className="row mt-5">
                    <div className="col">
                      <label className={styles.boldBrownText}>
                        Min Total Price :{" "}
                      </label>
                      <input
                        className={`${styles.setPromoForm} form-control`}
                        type="text"
                        placeholder="Type the min total price"
                      ></input>
                    </div>
                    <div className="col">
                      <label className={styles.boldBrownText}>
                        Max Discount :
                      </label>
                      <input
                        className={`${styles.setPromoForm} form-control`}
                        placeholder="Type the max discount"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group mt-5">
                    <label className={styles.boldBrownText}>
                      Input promo code :
                    </label>
                    <input
                      className={`${styles.setPromoForm} w-100 form-control`}
                      type="text"
                      placeholder="Type the promo code"
                    ></input>
                  </div>
                  <div className="form-group mt-5">
                    <label className={styles.boldBrownText}>
                      Description:{" "}
                    </label>
                    <input
                      className={`${styles.setPromoForm} w-100 form-control`}
                      type="text"
                      placeholder="Describe your product min. 150 characters"
                    ></input>
                  </div>
                  <Row>
                    <Col>
                      <div className="pt-4">
                        <button className={styles.brownButton}>
                          Update Promo
                        </button>
                      </div>
                    </Col>
                    <Col>
                      <div className="pt-4">
                        <button className={styles.redButton}>
                          Delete Promo
                        </button>
                      </div>
                    </Col>
                  </Row>

                  <div className="pt-4">
                    <button className={styles.greyButton}>Cancel</button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`${styles.greyBackground} mt-5`}>
          <div className="pt-5">
            <Footer />
          </div>
        </div>
      </Layout>
    </>
  );
}
