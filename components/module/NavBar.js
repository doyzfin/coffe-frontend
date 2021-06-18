import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <Container fluid className={styles.main}>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#" className={styles.brand}>
            <Row>
              <Col>
                <img alt="" src="/coffee 1.png" />
              </Col>
              <Col className={styles.colBrand}>Coffee Shop</Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.form}>
              <Nav.Link href="#" className={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link href="#" className={styles.navLink}>
                Product
              </Nav.Link>
              <Nav.Link href="#" className={styles.navLink}>
                Your Chart
              </Nav.Link>
              <Nav.Link href="#" className={styles.navLink}>
                History
              </Nav.Link>
            </Nav>
            <Form>
              <Form.Control
                type="text"
                placeholder="Search"
                className={styles.formControl}
              />
            </Form>
            <img alt="" src="/chat.png" className={styles.notif} />
            <img alt="" src="/image 39.png" className={styles.profile} />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
}
