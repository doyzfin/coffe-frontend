import Layout from "components/Layout";
import NavBar from "components/module/NavBar";
import Footer from "components/module/footer";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import styles from "../../styles/NewProduct.module.css";
import React, { useState } from "react";

export default function newProduct() {
  const [isClickSize, setIsClickSize] = useState(false);
  const [isClickCoffee, setIsClickCoffee] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [imageProduct, setImageProduct] = useState("");
  const [formProduct, setFormProduct] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productSize: "",
    productDesc: "",
    image: null,
  });

  const handleClickSizeCoffee = () => {
    setIsClickCoffee(true);
    setIsClickSize(false);
  };

  const handleClickSizeFood = () => {
    setIsClickSize(true);
    setIsClickCoffee(false);
  };
  const inputOpenFileRef = React.createRef();
  const showOpenFileDlg = () => {
    inputOpenFileRef.current.click();
  };
  const handleImage = (event) => {
    event.preventDefault();
    setIsImage(true);
    setImageProduct(URL.createObjectURL(event.target.files[0]));
    setFormProduct({ ...formProduct, image: event.target.files[0] });
  };
  const changeText = (event) => {
    setFormProduct({ ...formProduct, [event.target.name]: event.target.value });
  };
  const handleCancel = () => {
    setIsImage(false);
    setFormProduct({
      productName: "",
      productPrice: "",
      productCategory: "",
      productSize: "",
      productDesc: "",
      image: null,
    });
  };
  console.log(formProduct);
  return (
    <Layout title="Add Product">
      <NavBar />
      <Container>
        <p className={styles.titleProduct}>
          Product &gt;<span className={styles.page}>Add product</span>
        </p>
        <Row>
          <Col sm={5}>
            <input
              ref={inputOpenFileRef}
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleImage(event)}
            />
            <Card className={isImage ? styles.cardImgProduct : styles.forImg}>
              <img
                alt=""
                src={isImage ? imageProduct : "/camera.png"}
                className={isImage ? styles.imageProduct : styles.camera}
              />
            </Card>
            <Button className={styles.btnGalery} onClick={showOpenFileDlg}>
              Choose from gallery
            </Button>
            <Button className={styles.btnSave}>Save Product</Button>
            <Button className={styles.btnCancel} onClick={handleCancel}>
              Cancel
            </Button>
          </Col>
          <Col sm={7} className={styles.formInput}>
            <Form>
              <Form.Group controlId="formText">
                <Form.Label className={styles.nameLabel}>Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type product name min. 50 characters"
                  className={styles.controlInput}
                  name="productName"
                  value={formProduct.productName}
                  onChange={(event) => changeText(event)}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label className={styles.nameLabel}>
                      Price :
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type the price"
                      className={styles.controlInput}
                      name="productPrice"
                      value={formProduct.productPrice}
                      onChange={(event) => changeText(event)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridPassword">
                    <Form.Label className={styles.nameLabel}>
                      Category :
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className={styles.controlInput}
                      name="productCategory"
                      value={formProduct.productCategory}
                      onChange={(event) => changeText(event)}
                    >
                      <option value="">Select category</option>
                      <option value="Favorite Product">Favorite Product</option>
                      <option value="Coffee">Coffee</option>
                      <option value="Non Coffee">Non Coffee</option>
                      <option value="Foods">Foods</option>
                      <option value="Add-on">Add-on</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formEmail">
                <Form.Label className={styles.nameLabel}>
                  Description :
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describe your product min. 150 characters"
                  className={styles.controlInput}
                  name="productDesc"
                  value={formProduct.productDesc}
                  onChange={(event) => changeText(event)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className={styles.nameLabel}>
                  Input product size :
                </Form.Label>
                <br />
                <Form.Text className="text-muted">
                  Click size you want to use for this product
                </Form.Text>
              </Form.Group>
            </Form>
            <Row className={styles.rowCardCategory}>
              <Col>
                <Card
                  className={isClickCoffee ? styles.click : styles.unClick}
                  onClick={handleClickSizeCoffee}
                >
                  R
                </Card>
              </Col>{" "}
              <Col>
                <Card
                  className={isClickCoffee ? styles.click : styles.unClick}
                  onClick={handleClickSizeCoffee}
                >
                  L
                </Card>
              </Col>{" "}
              <Col>
                <Card
                  className={isClickCoffee ? styles.click : styles.unClick}
                  onClick={handleClickSizeCoffee}
                >
                  XL
                </Card>
              </Col>{" "}
              <Col>
                <Card
                  className={isClickSize ? styles.click : styles.unClick}
                  onClick={handleClickSizeFood}
                >
                  250
                  <br /> gr
                </Card>
              </Col>{" "}
              <Col>
                <Card
                  className={isClickSize ? styles.click : styles.unClick}
                  onClick={handleClickSizeFood}
                >
                  300
                  <br /> gr
                </Card>
              </Col>{" "}
              <Col>
                <Card
                  className={isClickSize ? styles.click : styles.unClick}
                  onClick={handleClickSizeFood}
                >
                  500
                  <br /> gr
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
}
