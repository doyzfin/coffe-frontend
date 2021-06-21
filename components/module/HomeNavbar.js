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
import homeStyles from "../../styles/HomeNavbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { connect } from "react-redux";
import { setKeywords } from "redux/actions/keywords";

function HomeNavBar(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const setKeywordsStore = (text) => {
    setSearch(text);
    props.setKeywords(text);
    if (props.catchKey) {
      props.catchKey(text);
    }
  };

  const moveToProfile = () => {
    router.push("/profile");
  };

  // console.log(props);
  return (
    <Container fluid className={styles.main}>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#" className={styles.brand}>
            <Row>
              <Col>
                <img alt="" src="/coffee 1.png" />
              </Col>
              <Col className={styles.colBrand}>Coffee Express</Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.form}>
              <Nav.Link
                className={styles.navLink}
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={styles.navLink}
                onClick={() => {
                  router.push("/product-admin");
                }}
              >
                Product
              </Nav.Link>
              <Nav.Link
                className={styles.navLink}
                onClick={() => {
                  router.push("/manage-order-admin");
                }}
              >
                Orders
              </Nav.Link>
              <Nav.Link
                className={styles.navLink}
                onClick={() => {
                  router.push("/admin-dashboard");
                }}
              >
                Dashboard
              </Nav.Link>
            </Nav>
            <Nav.Link className={`${styles.navLink} me-5 fw-bold`}>
              Login
            </Nav.Link>
            <button className={`${homeStyles.yellowButton} fw-bold`}>
              Sign Up
            </button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  );
}

const mapDispatchToProps = { setKeywords };
export default connect(null, mapDispatchToProps)(HomeNavBar);
