import Layout from "../../components/Layout";
import {Container, Row, Col, Card, Form} from "react-bootstrap";
import styles from "../../styles/SetPromo.module.css";
import Footer from "../../components/module/footer";

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
              <Card className={`${styles.picturePlaceBackground} mx-auto`}>
                <img src="/photo-camera-black-tool 4.png" className={`${styles.picturePlace} mx-auto my-auto`}></img>
              </Card>
            </div>
          </div> 
          <div className="pt-4">
            <button className={styles.yellowishButton}>Choose From Gallery</button>
          </div>
          <div className="pt-4">
            <button className={styles.brownButton}>Save Product</button>
          </div> 
          <div className="pt-4">
            <button className={styles.greyButton}>Cancel</button>
          </div>
        </Col>
        <Col lg={7} md={7} sm={7} xs={12}> 
          <div className="ms-5">
            <form>
              <div className="form-group">
                <label className={styles.boldBrownText}>Name: </label> 
                <input className={`${styles.setPromoForm} w-100 form-control`} type="text" placeholder="Type product name min. 50 characters"></input>
              </div> 
              <div className="row mt-5">
                <div className="col"> 
                  <label className={styles.boldBrownText}>Price: </label>
                  <input className={`${styles.setPromoForm} form-control`} type="text" placeholder="Type the price"></input>
                </div>
                <div className="col"> 
                  <label className={styles.boldBrownText}>Category: </label>
                  <input className={`${styles.setPromoForm} form-control`} placeholder="Select category"></input>
                </div>
              </div> 
              <div className="form-group mt-5">
                <label className={styles.boldBrownText}>Description: </label> 
                <input className={`${styles.setPromoForm} w-100 form-control`} type="text" placeholder="Describe your product min. 150 characters"></input>
              </div> 
              <div className="form-group mt-5">
                <label className={`${styles.boldBrownText} d-block`}>Input product size:</label> 
                <span className="mt-3 d-block">Click size you want to use for this product: </span> 
                <div className="d-flex justify-content-start mt-3">

                  {/* Yellow Button */}
                  <button className={styles.yellowBullet}><span className="fw-bold">R</span></button> 
                  <button className={`${styles.yellowBullet} ms-3`}><span className="fw-bold">L</span></button>
                  <button className={`${styles.yellowBullet} ms-3`}><span className="fw-bold">XL</span></button>
                
                  {/* Grey Button */}
                  <button className={`${styles.greyBullet} ms-3`}><span className={`fw-bold ${styles.smallerFont}`}>250 gr</span></button> 
                  <button className={`${styles.greyBullet} ms-3`}><span className={`fw-bold ${styles.smallerFont}`}>300</span></button>
                  <button className={`${styles.greyBullet} ms-3`}><span className={`fw-bold ${styles.smallerFont}`}>500</span></button>
                </div>
              </div>
            </form>
          </div>  
        </Col> 
      </Row>
    </Container>
    <Footer />
   </Layout>
   </>
 ) 
}