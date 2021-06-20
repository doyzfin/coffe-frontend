import NavBar from "components/module/NavBar";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import styles from "../../styles/ProductDetail.module.css";
import NavBar from "components/module/NavBar";
import Footer from "components/module/footer";

export async function getServerSideProps(context) {
  // const data = await authPage(context);
  const { id } = context.query;

  return {
    props: { id },
  };
}

export default function ProductDetail(props) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState(false);
  const priceR = 10000;
  const priceL = 15000;
  const priceXL = 20000;

  const handleCart = () => {
    if (count === 0) {
      alert("Choose a size");
    } else {
      if (cart === false) {
        setCart(true);
      } else {
        setCart(false);
      }
    }
  };

  const countPlus = () => {
    if (size === "") {
      alert("Choose a size");
    } else {
      setCount(count + 1);
      if (size == "regular") {
        setPrice(priceR + price);
      }
      if (size == "large") {
        setPrice(priceL + price);
      }
      if (size == "extra large") {
        setPrice(priceXL + price);
      }
    }
  };

  console.log(count, price, size);

  const countMinus = () => {
    if (count <= 0) {
      setCount(0);
      setPrice(0);
      setSize("");
      setCart(false);
    } else {
      setCount(count - 1);
      if (size == "regular") {
        setPrice(price - priceR);
      }
      if (size == "large") {
        setPrice(price - priceL);
      }
      if (size == "extra large") {
        setPrice(price - priceXL);
      }
    }
  };

  const handleSize = (stringSize) => {
    setCount(1);
    if (stringSize == "R") {
      setSize("regular");
      setPrice(priceR);
    }
    if (stringSize == "L") {
      setSize("large");
      setPrice(priceL);
    }
    if (stringSize == "XL") {
      setSize("extra large");
      setPrice(priceXL);
    }
  };

  const convertToRupiah = (amount) => {
    let number_string = amount.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? "." : "";
      return (rupiah += separator + ribuan.join("."));
    }
  };

  console.log(props.id);

  return (
    <Layout title="Product Detail">
      <NavBar />
      <div className={styles.container}>
        <h2>
          Favorite & Promo <span>{">"} Cold Braw</span>
        </h2>
        <div className={`row ${styles.row}`}>
          <div className={`col-5 ${styles.colLeft}`}>
            <img src="/img-coffee.png" alt="" />
            <div className={styles.size}>
              <h3>Choose a size</h3>
              <div className={styles.sizeFont}>
                <Button variant="warning" onClick={() => handleSize("R")}>
                  R
                </Button>
                <Button variant="warning" onClick={() => handleSize("L")}>
                  L
                </Button>
                <Button variant="warning" onClick={() => handleSize("XL")}>
                  XL
                </Button>
              </div>
            </div>
            <Button onClick={handleCart} variant="Light">
              Add to Cart
            </Button>
          </div>
          <div className={`col-7 ${styles.colRight}`}>
            <h1>Cold Brew</h1>
            <p>
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and steeped for as long as
              48 hours.
            </p>
            <div className={styles.total}>
              <div className={styles.btnCount}>
                <button
                  className={styles.minus}
                  onClick={countMinus}
                  style={
                    count === 0 && cart === true
                      ? { backgroundColor: "red" }
                      : { backgroundColor: "white" }
                  }
                >
                  {count === 0 && cart === true ? (
                    <img src="/icon-trash.png" alt="" />
                  ) : (
                    "-"
                  )}
                </button>
                <h4>{count}</h4>
                <button className={styles.plus} onClick={countPlus}>
                  +
                </button>
              </div>
              <h2>IDR{convertToRupiah(price)}</h2>
            </div>
            <div
              style={
                cart === false
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              className={styles.checkout}
            >
              <img src="/img-coffee.png" alt="" />
              <div className={styles.order}>
                <h5>Cold Brew</h5>
                <h6>
                  x{count} ({size})
                </h6>
              </div>
              <h3>Checkout</h3>
              <Button variant="warning">
                <img src="/arrow 3.png" alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
