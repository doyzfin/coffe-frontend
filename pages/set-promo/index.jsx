import Layout from "../../components/Layout";
import {Container, Row, Col} from "react-bootstrap";
import styles from "../../styles/SetPromo.module.css";

export default function setpromo() {
 return(
   <>
   <Layout title="Set Promo">
    <Container>
      <Row className="pt-5">
        <Col lg={4} md={4} sm={4} xs={12}>
          <span className="d-block">Product {`>`} <span className="fw-bold">Add Product</span></span> 
          <div className="pt-5">
            <div className="pt-3">
              <div className={`d-flex justify-content-center ${styles.picturePlaceBackground}`}>
                <img src="/photo-camera-black-tool 4.png" className={styles.picturePlace}></img>
              </div>
            </div>
          </div> 
          <div className="pt-4">
            <button className={styles.yellowishButton}>Choose From Gallery</button>
          </div>
          <div className="pt-4">
            <button className={styles.yellowishButton}>Save Product</button>
          </div>
        </Col>
      </Row>
    </Container>
   </Layout>
   </>
 ) 
}