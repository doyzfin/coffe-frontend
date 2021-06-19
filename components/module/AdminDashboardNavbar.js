import styles from "../../styles/AdminDasHboardNavbar.module.css";

export default function AdminDasboardNavbar() {
  return (
    <>
      <div className={styles.whiteBackground}>
        <div className="container-fluid py-4" style={{ maxWidth: "1116px" }}>
          <div className="row h-100 w-100">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="d-flex h-100">
                <img src="/coffee 1.png" className="me-2 my-auto"></img>
                <span className="fw-bold my-auto ms-2">Coffee Express</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center my-auto">
              <div className="d-flex justify-content-around flex-wrap">
                <span className="my-auto mx-1">Home</span>
                <span className="my-auto mx-1">Product</span>
                <span className="my-auto mx-1">Orders</span>
                <span className="my-auto mx-1">Dashboard</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 my-auto">
              <div className="d-flex justify-content-end flex-wrap">
                <img src="/Vector.png" style={{ height: "30px" }}></img>
                <img
                  src="/chat (1) 1.png"
                  className="mx-3"
                  style={{ height: "30px" }}
                ></img>
                <img
                  src="/image 39.png"
                  style={{ height: "30px", borderRadius: "50%" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
