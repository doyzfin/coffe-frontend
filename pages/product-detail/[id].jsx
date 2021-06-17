import Layout from "../../components/layout";
import styles from "../../styles/ProductDetail.module.css";

export default function ProductDetail() {
  return (
    <Layout title="Product Detail">
      {/* {Navbar} */}
      <div className={styles.container}>
        <h2>
          Favorite & Promo {">"} <span>Cold Braw</span>
        </h2>
        <div className="row">
          <div className="col">
            <img src="/img-coffee.png" alt="" />
            <div>
              <h3>Choose a size</h3>
              <div>
                <span>R</span>
                <span>L</span>
                <span>Xl</span>
              </div>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="col">side right</div>
        </div>
      </div>
    </Layout>
  );
}
