import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import styles from "../../styles/NavBar.module.css";
import homeStyles from "../../styles/HomeNavbar.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

import { connect } from "react-redux";
import { getUser } from "redux/actions/user";

function HomeNavBar(props) {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (Cookie.get("token")) {
      props
        .getUser(Cookie.get("userId"), Cookie.get("token"))
        .then((res) => {
          setUser(res.value.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const moveToProfile = () => {
    router.push("/profile");
  };
  // console.log(user);
  return (
    <Container fluid className={styles.main}>
      <Navbar expand="lg" className={styles.navbarWidth}>
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
  );
}

const mapDispatchToProps = { getUser };
export default connect(null, mapDispatchToProps)(HomeNavBar);
