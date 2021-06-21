import Navbar from "../../components/module/NavBar";
import Layout from "../../components/Layout";
import { Container, Row, Col, Card, Grid, Form } from "react-bootstrap";
import styles from "../../styles/SetPromo.module.css";
import Footer from "../../components/module/greyFooter";
import { connect } from "react-redux";
import { postPromo } from "redux/actions/promo";
import React, { useState } from "react";

function setpromo() {
  const [formPromo, setFormPromo] = useState({
    promoName: "",
    promoCode: "",
    promoDiscount: "",
    promoDesc: "",
    expireStart: "",
    expireEnd: "",
    minTotalPrice: "",
    maxDiscount: "",
    image: null,
  });
  const [imagePromo, setImagePromo] = useState("");
  const [isImage, setIsImage] = useState(false);
  const inputOpenFileRef = React.createRef();
  const showOpenFileDlg = () => {
    inputOpenFileRef.current.click();
  };
  const handleImage = (event) => {
    event.preventDefault();
    setIsImage(true);
    setImagePromo(URL.createObjectURL(event.target.files[0]));
    setFormPromo({ ...formPromo, image: event.target.files[0] });
  };
  const changeText = (event) => {
    setFormPromo({ ...formPromo, [event.target.name]: event.target.value });
  };
  console.log(formPromo);
  return (
    <>
      <Layout title="Set Promo">
        <Navbar />
        <Container>
          <Row className="pt-5">
            <Col lg={4} md={4} sm={12} smPush={12} xs={12} xsPush={12}>
              <span className="d-block">
                Promo {`>`} <span className="fw-bold">Add Promo</span>
              </span>
              <div className="pt-5">
                <div className="pt-3">
                  <input
                    ref={inputOpenFileRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleImage(event)}
                  />
                  <Card className={`${styles.picturePlaceBackground} mx-auto`}>
                    <img
                      src={
                        isImage ? imagePromo : "/photo-camera-black-tool 4.png"
                      }
                      className={`${styles.picturePlace} mx-auto my-auto`}
                    ></img>
                  </Card>
                </div>
              </div>
              <div className="pt-4">
                <button
                  className={styles.yellowishButton}
                  onClick={showOpenFileDlg}
                >
                  Choose From Gallery
                </button>
              </div>
              <form>
                <div className="form-group">
                  <label className={styles.boldBrownText1}>
                    Enter the discount:
                  </label>
                  <select
                    className={`${styles.setPromoForm1} w-100 form-control`}
                    name="promoDiscount"
                    value={formPromo.promoDiscount}
                    onChange={(event) => changeText(event)}
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
                  <div className="pt-4">
                    <button className={styles.brownButton}>Save Promo</button>
                  </div>
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
const mapStateToProps = (state) => ({
  promo: state.promo,
});

const mapDispatchToProps = { postPromo };

export default connect(mapStateToProps, mapDispatchToProps)(setpromo);
