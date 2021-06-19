import Layout from "../../components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../../styles/Profile.module.css";
import NavBar from "components/module/NavBar";
import Footer from "components/module/footer";

// export async function getServerSideProps(context) {
//   const data = await authPage(context);
//   axios.setToken(data.token);

//   const user = await axios.axiosApiIntances
//     .get(`user/by-id/${data.user}`)
//     .then((res) => {
//       return res.data.data[0];
//     })
//     .catch((err) => {
//       console.log(err.response);
//       return {};
//     });

//   return {
//     props: { user },
//   };
// }

export default function Profile(props) {
  const [gender, setGender] = useState("");

  const selectGender = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
  };

  console.log("GENDER", gender);
  return (
    <Layout title="Profile">
      <NavBar />
      <Container className={`${styles.cnt} pt-4 pb-5`} fluid>
        <Row>
          <Col>
            <div className={`${styles.title} mb-4 ms-3`}>User Profile</div>
          </Col>
        </Row>
        <Row className={`${styles.box} p-4 me-3 ms-3`}>
          <Col md={3}>
            <div className="text-center mt-4 mb-4">
              <label
                htmlFor="formFile"
                className="form-label"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/no-img.png"
                  alt="Picture user"
                  width={140}
                  height={140}
                  className={styles.noPp}
                />
              </label>
              <input
                className={`${styles.fileInput} form-control`}
                type="file"
                id="formFile"
              />
              <div className={`${styles.name}`}>UserName</div>
              <div className={`${styles.email} mb-3`}>userEmail</div>
              <Button className={`${styles.btnBrown} mb-2`} variant="light">
                Remove photo
              </Button>
              <Button className={`${styles.btnWhite} mb-4`} variant="light">
                EditPassword
              </Button>
              <div className={`${styles.sideText} mb-4`}>
                Do you want to save the change?
              </div>
              <Button className={`${styles.btnBrown} mb-2`} variant="light">
                Save Change
              </Button>
              <Button className={`${styles.btnYellow} mb-4`} variant="light">
                Cancel
              </Button>
              <Button className={`${styles.btnWhite}`} variant="light">
                Log Out
              </Button>
            </div>
          </Col>
          <Col md={9}>
            <div className={`${styles.innerBox} shadow p-5`}>
              <div className={`${styles.rightTitle} mb-4`}>Contacts</div>
              <Row>
                <Col md={7}>
                  <Form.Group className="mb-3" controlId="formGroupEmail1">
                    <Form.Label className={styles.semi}>
                      Email address:
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group className="mb-3" controlId="formGroupText2">
                    <Form.Label className={styles.semi}>
                      Mobile number:
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  <Form.Group className="mb-3" controlId="formGroupText3">
                    <Form.Label className={styles.semi}>
                      Delivery adress :
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      placeholder="Enter delivery addres"
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
              <div className={`${styles.rightTitle} mb-4 mt-4`}>Details</div>
              <Row>
                <Col md={7}>
                  <Form.Group className="mb-3" controlId="formGroupText4">
                    <Form.Label className={styles.semi}>
                      Display name:
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      placeholder="Enter name"
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group className="mb-3" controlId="formGroupText5">
                    <Form.Label className={styles.semi}>DD/MM/YY:</Form.Label>
                    <Form.Control className={styles.input} type="date" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  <Form.Group className="mb-3" controlId="formGroupText6">
                    <Form.Label className={styles.semi}>
                      First name :
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      placeholder="Enter first name"
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col md={7}>
                  <Form.Group className="mb-3" controlId="formGroupText7">
                    <Form.Label className={styles.semi}>Last name :</Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      placeholder="Enter last name"
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
              <div>
                <div onChange={selectGender} className="text-center mt-4">
                  <input
                    type="radio"
                    value="MALE"
                    name="gender"
                    className="me-2"
                  />{" "}
                  Male
                  <input
                    type="radio"
                    value="FEMALE"
                    name="gender"
                    className="me-2 ms-3"
                  />{" "}
                  Female
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
}
