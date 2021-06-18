import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import {Container, Row, Col, Form} from "react-bootstrap"
import styles from "../../styles/Profile.module.css";

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
  // console.log(userImage);
  return (
    <Layout title="Profile">
      <Container className={styles.cnt}>
        <Row>
          <Col>
          <div className={styles.title}>User Profile</div>
          </Col>
        </Row>
        <Row className={styles.box}>
          <Col md={3}>A</Col>
          <Col md={9}>B</Col>
        </Row>
      </Container>
    </Layout>
  );
}
