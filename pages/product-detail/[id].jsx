import NavBar from "components/module/NavBar";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import styles from "../../styles/ProductDetail.module.css";
import Footer from "components/module/footer";
import { authPage } from "middleware/authorizationPage";
import axiosApiIntances from "utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  const { id } = context.query;

  const product = await axiosApiIntances
    .get(`product/${id}`, {
      headers: {
        Authorization: "Bearer " + data.token,
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch(() => {
      return [];
    });

  return {
    props: { id, product },
  };
}

export default function ProductDetail(props) {
  const router = useRouter();
  const [qty, setQty] = useState(0);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const priceR = props.product[0].product_price;
  const priceL = (priceR * 50) / 100 + priceR;
  const priceXL = (priceL * 50) / 100 + priceL;
  const [productName, setProductName] = useState("");
  const [order, setOrder] = useState({});
  const [checkout, setCheckout] = useState([]);

  const handleCart = () => {
    if (count === 0) {
      alert("Choose a size");
    } else {
      alert("Berhasil masuk ke cart");
    }
  };

  useEffect(() => {
    setCheckout(
      Object.keys(order).map((key) => ({
        value: order[key],
      }))
    );
  }, [price]);

  const countPlus = () => {
    if (size === "") {
      alert("Choose a size");
    } else {
      setCount(parseInt(count) + 1);
      setQty(qty + 1);
      if (size == "regular") {
        setPrice(parseInt(priceR) + parseInt(price));
        setSubTotal(priceR + subTotal);
        setOrder(
          Object.assign(order, {
            sizeR: ["regular", count + 1, priceR + price],
          })
        );
      }
      if (size == "large") {
        setPrice(parseInt(priceL) + parseInt(price));
        setSubTotal(priceL + subTotal);
        setOrder(
          Object.assign(order, {
            sizeL: ["large", count + 1, priceL + price],
          })
        );
      }
      if (size == "extra large") {
        setPrice(parseInt(priceXL) + parseInt(price));
        setSubTotal(priceXL + subTotal);
        setOrder(
          Object.assign(order, {
            sizeXL: ["extra large", count + 1, priceXL + price],
          })
        );
      }
    }
  };

  const countMinus = () => {
    if (count <= 0) {
      setQty(0);
      setCount(0);
      setPrice(0);
      setSize([""]);
      setCart(false);
    } else {
      setCount(parseInt(count) - 1);
      setQty(qty - 1);
      if (size == "regular") {
        setPrice(parseInt(price) - parseInt(priceR));
        setOrder(
          Object.assign(order, {
            sizeR: ["regular", count - 1, price - priceR],
          })
        );
      }
      if (size == "large") {
        setPrice(parseInt(price) - parseInt(priceL));
        setOrder(
          Object.assign(order, {
            sizeL: ["large", count - 1, price - priceL],
          })
        );
      }
      if (size == "extra large") {
        setPrice(parseInt(price) - parseInt(priceXL));
        setOrder(
          Object.assign(order, {
            sizeXL: ["extra large", count - 1, price - priceXL],
          })
        );
      }
    }
  };

  const handleSize = (stringSize) => {
    setQty(1);
    setCount(1);
    setCart(true);
    setProductName(props.product[0].product_name);
    if (stringSize == "R") {
      setSize("regular");
      setPrice(priceR);
      setSubTotal(priceR);
      if (order.sizeR === undefined) {
        setOrder(Object.assign(order, { sizeR: ["regular", 1, priceR] }));
      } else {
        return {};
      }
    }
    if (stringSize == "L") {
      setSize("large");
      setPrice(priceL);
      setSubTotal(priceL);
      if (order.sizeL === undefined) {
        setOrder(Object.assign(order, { sizeL: ["large", 1, priceL] }));
      } else {
        return {};
      }
    }
    if (stringSize == "XL") {
      setSize("extra large");
      setPrice(priceXL);
      setSubTotal(priceXL);
      if (order.sizeXL === undefined) {
        setOrder(Object.assign(order, { sizeXL: ["extra large", 1, priceXL] }));
      } else {
        return {};
      }
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

  const handleCheckout = () => {
    event.preventDefault();
    console.log(checkout);
    Cookies.set("item", checkout);
    Cookies.set("productId", props.product[0].product_id);

    router.push(`/payment?productId=${props.product[0].product_id}`);
  };
  return (
    <Layout title="Product Detail">
      <NavBar />
      <div className={styles.container}>
        <h2>
          Favorite & Promo{" "}
          <span>
            {">"} {props.product[0].product_name}
          </span>
        </h2>
        <div className={`row ${styles.row}`}>
          <div className={`col-5 ${styles.colLeft}`}>
            {props.product[0].product_image ? (
              <img
                src={`http://localhost:3005/backend5/api/${props.product[0].product_image}`}
                alt=""
              />
            ) : (
              <img src="/warning.png" alt="" />
            )}

            <div className={styles.size}>
              <h3>Choose a size</h3>
              <div className={styles.sizeFont}>
                <Button variant="warning" onClick={() => handleSize("R")}>
                  {props.product[0].product_size == "B" ? <h6>250gr</h6> : "R"}
                </Button>
                <Button variant="warning" onClick={() => handleSize("L")}>
                  {props.product[0].product_size == "B" ? <h6>300gr</h6> : "L"}
                </Button>
                <Button variant="warning" onClick={() => handleSize("XL")}>
                  {props.product[0].product_size == "B" ? <h6>500gr</h6> : "XL"}
                </Button>
              </div>
            </div>
            <Button onClick={handleCart} variant="Light">
              Add to Cart
            </Button>
          </div>
          <div className={`col-7 ${styles.colRight}`}>
            <h1>{props.product[0].product_name}</h1>
            <p>{props.product[0].product_desc}</p>
            <div
              className={styles.total}
              style={
                cart === false
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              <div className={styles.btnCount}>
                <button
                  className={styles.minus}
                  onClick={countMinus}
                  style={
                    qty === 0 && cart === true
                      ? { backgroundColor: "red" }
                      : { backgroundColor: "white" }
                  }
                >
                  {qty === 0 && cart === true ? (
                    <img src="/icon-trash.png" alt="" />
                  ) : (
                    "-"
                  )}
                </button>
                <h4>{qty}</h4>
                <button className={styles.plus} onClick={countPlus}>
                  +
                </button>
              </div>
              <h2>IDR{convertToRupiah(subTotal)}</h2>
            </div>
            <div
              style={
                cart === false
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              className={styles.checkout}
              onClick={handleCheckout}
            >
              <img
                src={`http://localhost:3005/backend5/api/${props.product[0].product_image}`}
                alt=""
              />
              <div className={styles.order}>
                <h5>{props.product[0].product_name}</h5>
                {checkout.length > 0
                  ? checkout.map((item, index) => {
                      return (
                        <h6 key={index}>
                          x{item.value[1]} ({item.value[0]})
                        </h6>
                      );
                    })
                  : ""}
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
