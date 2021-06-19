import styles from "../../styles/AdminDasHboardNavbar.module.css";

export default function AdminDasboardNavbar() {
  return (
    <>
      <div className={styles.whiteBackground}>
        <div className="container py-4">
          <div className="d-flex justify-content-between py-1">
            <div className="d-flex">
              <img src="/coffee 1.png" className="me-2"></img>
              <span className="fw-bold my-auto ms-2">Coffee Express</span>
            </div>
            <div className="d-flex my-auto">
              <span className="my-auto mx-4">Home</span>
              <span className="my-auto mx-4">Product</span>
              <span className="my-auto mx-4">Orders</span>
              <span className="my-auto mx-4">Dashboard</span>
            </div>
            <div className="d-flex">
              <img src="/Vector.png" style={{ height: "30px" }}></img>
              <img
                src="/chat (1) 1.png"
                style={{ height: "30px" }}
                className="mx-5"
              ></img>
              <img
                src="/image 39.png"
                style={{ height: "30px", borderRadius: "50%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
