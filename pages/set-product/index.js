import Layout from "components/Layout";
import NavBar from "components/module/NavBar";
import Footer from "components/module/footer";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import styles from "../../styles/NewProduct.module.css";

export default function newProduct() {
  return (
    <Layout title="Add Product">
      <NavBar />
      <Container>
        <p className={styles.titleProduct}>
          Product &gt;<span className={styles.page}>Add product</span>
        </p>
        <Row>
          <Col sm={5}>
            <Card className={styles.forImg}>
              <img alt="" src="/camera.png" className={styles.camera} />
            </Card>
            <Button className={styles.btnGalery}>Choose from gallery</Button>
            <Button className={styles.btnSave}>Save Product</Button>
            <Button className={styles.btnCancel}>Cancel</Button>
          </Col>
          <Col sm={7} className={styles.formInput}>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label className={styles.nameLabel}>Name :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Type product name min. 50 characters"
                  className={styles.controlInput}
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
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridPassword">
                    <Form.Label className={styles.nameLabel}>
                      Category :
                    </Form.Label>
                    <Form.Control as="select" className={styles.controlInput}>
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
            <Row>
              <Col>
                <Card className={styles.coffee}>R</Card>
              </Col>{" "}
              <Col>
                <Card className={styles.coffee}>R</Card>
              </Col>{" "}
              <Col>
                <Card className={styles.coffee}>R</Card>
              </Col>{" "}
              <Col>
                <Card className={styles.coffee}>R</Card>
              </Col>{" "}
              <Col>
                <Card className={styles.coffee}>R</Card>
              </Col>{" "}
              <Col>
                <Card className={styles.coffee}>R</Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
}
